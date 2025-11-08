<?php
// セキュリティ設定
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// CSRF対策（簡易版）
session_start();

// POSTリクエストのみ許可
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

// 入力データの取得と検証
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$company = filter_input(INPUT_POST, 'company', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// バリデーション
$errors = [];

if (empty($name)) {
    $errors[] = '氏名は必須です。';
}

if (empty($company)) {
    $errors[] = '会社名は必須です。';
}

if (empty($email)) {
    $errors[] = '有効なメールアドレスを入力してください。';
}

if (empty($phone)) {
    $errors[] = '電話番号は必須です。';
}

if (empty($message)) {
    $errors[] = 'メッセージは必須です。';
}

// エラーがある場合
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => implode('\n', $errors)
    ]);
    exit;
}

// メール設定
$to = 'info@marslink.co.jp'; // 受信用メールアドレス
$subject = '【MarsLink】お問い合わせ - ' . $name . '様';

// メール本文
$mail_body = "
株式会社MarsLink　御中

ウェブサイトからお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【お問い合わせ内容】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

氏名：$name
会社名：$company
Email：$email
電話番号：$phone

メッセージ：
$message

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
送信日時：" . date('Y年m月d日 H時i分') . "
送信者IP：" . $_SERVER['REMOTE_ADDR'] . "
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

このメールに直接返信することで、お客様にご連絡いただけます。
";

// メールヘッダー
$headers = [
    'From: ' . $email,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];

// メール送信
$mail_sent = mail($to, $subject, $mail_body, implode("\r\n", $headers));

if ($mail_sent) {
    // 自動返信メール
    $auto_reply_subject = '【MarsLink】お問い合わせありがとうございます';
    $auto_reply_body = "
$name 様

この度は、株式会社MarsLinkにお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを承りました。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
会社名：$company
Email：$email
電話番号：$phone

メッセージ：
$message
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

弊社担当者より、2営業日以内にご連絡させていただきます。
お急ぎの場合は、下記までお電話にてお問い合わせください。

株式会社MarsLink
電話：03-1234-5678
Email：info@marslink.co.jp

今後ともよろしくお願いいたします。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
株式会社MarsLink
〒123-4567 東京都渋谷区○○ 1-2-3 ○○ビル 5F
TEL: 03-1234-5678 / Email: info@marslink.jp
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
";

    $auto_reply_headers = [
        'From: info@marslink.co.jp',
        'Reply-To: info@marslink.co.jp',
        'X-Mailer: PHP/' . phpversion(),
        'Content-Type: text/plain; charset=UTF-8'
    ];

    mail($email, $auto_reply_subject, $auto_reply_body, implode("\r\n", $auto_reply_headers));

    // 成功レスポンス
    echo json_encode([
        'status' => 'success',
        'message' => 'お問い合わせが正常に送信されました。自動返信メールをご確認ください。'
    ]);
} else {
    // 送信失敗
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'メール送信に失敗しました。しばらく時間をおいて再度お試しください。'
    ]);
}
?> 