# Jekyll Platform Page Integration Plan

## 現状の理解

1. **既存のplatform.htmlレイアウト**
   - 独立したレイアウトとして存在
   - defaultレイアウトを継承していない
   - 独自のヘッダー/フッター実装

2. **問題点**
   - ヘッダー/フッターの重複
   - 一貫性の欠如
   - メンテナンスの困難さ

## 統合計画

### Phase 1: 構造の統一化

1. **platform.htmlレイアウトの修正**
   - defaultレイアウトを継承するように変更
   - 重複したヘッダー/フッター部分を削除
   - platform特有のスタイルのみを保持

2. **コンポーネントの分割**
   - `_includes/platform/hero.html` - ヒーローセクション
   - `_includes/platform/vision.html` - ビジョンセクション
   - `_includes/platform/products.html` - プロダクトセクション
   - `_includes/platform/ecosystem.html` - エコシステムセクション
   - `_includes/platform/trust.html` - 実績・信頼性セクション
   - `_includes/platform/cta.html` - CTAセクション

### Phase 2: スタイルの統合

1. **TailwindCSS設定の統一**
   - _config.ymlまたは専用ファイルで設定を管理
   - カスタムアニメーションの定義を統一

2. **カスタムCSSの整理**
   - platform特有のスタイルを`/css/platform.css`に分離
   - 共通スタイルは`/css/style.css`に統合

### Phase 3: データの構造化

1. **_data/platform.yml**の作成
   ```yaml
   hero:
     title: "観光体験を、"
     subtitle: "点ではなく循環へ。"
     description: "MarsLinkは移動・体験・発信・記録・再訪をつなぐ..."
   
   products:
     - name: "CabinTime"
       status: "active"
       description: "移動中のオフライン観光メディア..."
       image: "https://images.unsplash.com/..."
   ```

2. **動的コンテンツの管理**
   - データファイルから情報を読み込み
   - 更新が容易な構造

### Phase 4: URLとナビゲーション

1. **URL構造**
   - `/platform/` または `/marslink-platform/`
   - permalinkで管理

2. **ナビゲーションの更新**
   - _includes/header.htmlに新しいリンクを追加
   - モバイルメニューも同様に更新

### Phase 5: SEOとパフォーマンス

1. **メタデータの最適化**
   - platform用のOG画像
   - 適切なdescriptionとkeywords

2. **画像の最適化**
   - Unsplash画像のキャッシュ
   - 適切なサイズとフォーマット

## 実装順序

1. **バックアップ作成** ✓
2. **新しいplatformレイアウトの作成**
3. **includeファイルへの分割**
4. **marslink-platform.htmlの更新**
5. **スタイルの統合**
6. **テストとデバッグ**
7. **本番環境への展開**

## 注意事項

- 既存のCabinTimeページには影響を与えない
- モバイル対応を維持
- SEO設定を保持
- パフォーマンスを考慮した実装

## 期待される成果

- 統一されたデザインシステム
- メンテナンスが容易な構造
- 拡張性の高いアーキテクチャ
- 一貫したユーザー体験