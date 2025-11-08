---
layout: page
title: "お問い合わせ - Netlify Forms版"
description: "MarsLinkのCabinTimeサービスに関するお問い合わせはこちらから。移動空間の価値創造について詳しくご説明いたします。"
permalink: /contact-netlify/
---

<div class="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                お問い合わせ
            </h1>
            <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                CabinTimeサービスについてのご質問・ご相談は<br>
                下記フォームよりお気軽にお問い合わせください
            </p>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl mx-auto">
            <div class="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
                <!-- Netlify Form -->
                <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    netlify-honeypot="bot-field"
                    class="space-y-6"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <!-- Hidden field for bots -->
                    <p class="hidden">
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>

                    <!-- 氏名 -->
                    <div>
                        <label for="name" class="form-label block text-sm font-medium mb-2">
                            氏名 <span class="form-required">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                            placeholder="山田太郎"
                        />
                    </div>

                    <!-- 会社名 -->
                    <div>
                        <label for="company" class="form-label block text-sm font-medium mb-2">
                            会社名 <span class="form-required">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="company" 
                            name="company" 
                            required 
                            class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                            placeholder="株式会社○○○"
                        />
                    </div>

                    <!-- Email -->
                    <div>
                        <label for="email" class="form-label block text-sm font-medium mb-2">
                            Email <span class="form-required">*</span>
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                            placeholder="example@company.com"
                        />
                    </div>

                    <!-- 電話番号 -->
                    <div>
                        <label for="phone" class="form-label block text-sm font-medium mb-2">
                            電話番号 <span class="form-required">*</span>
                        </label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            required 
                            class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50"
                            placeholder="03-1234-5678"
                        />
                    </div>

                    <!-- メッセージ -->
                    <div>
                        <label for="message" class="form-label block text-sm font-medium mb-2">
                            メッセージ <span class="form-required">*</span>
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required 
                            rows="6" 
                            class="form-input w-full rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50 resize-vertical"
                            placeholder="CabinTimeの導入について詳しく知りたいです。具体的な費用や導入期間について教えてください。"
                        ></textarea>
                    </div>

                    <!-- 送信ボタン -->
                    <div class="pt-6">
                        <button 
                            type="submit" 
                            class="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-orbitron font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                        >
                            送信する
                        </button>
                    </div>

                    <!-- プライバシーポリシー -->
                    <div class="text-center pt-2">
                        <p class="text-xs text-gray-400">
                            送信いただいた情報は、
                            <a href="{{ '/privacy/' | relative_url }}" class="text-cyan-400 hover:text-cyan-300 underline transition duration-100">プライバシーポリシー</a>
                            に従って適切に管理いたします。
                        </p>
                    </div>
                </form>
            </div>
        </div>

        <!-- Contact Information -->
        <div class="max-w-4xl mx-auto mt-16">
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Office -->
                <div class="text-center p-6 bg-gray-800/20 rounded-xl border border-gray-700/30">
                    <div class="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h3 class="font-orbitron font-semibold text-lg mb-2">所在地</h3>
                    <p class="text-gray-300 text-sm">
                        〒123-4567<br>
                        東京都渋谷区○○ 1-2-3<br>
                        ○○ビル 5F
                    </p>
                </div>

                <!-- Email -->
                <div class="text-center p-6 bg-gray-800/20 rounded-xl border border-gray-700/30">
                    <div class="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="font-orbitron font-semibold text-lg mb-2">Email</h3>
                    <p class="text-gray-300 text-sm">
                        <a href="mailto:info@marslink.jp" class="text-cyan-400 hover:text-cyan-300 transition-colors">
                            info@marslink.jp
                        </a>
                    </p>
                </div>

                <!-- Phone -->
                <div class="text-center p-6 bg-gray-800/20 rounded-xl border border-gray-700/30">
                    <div class="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                    </div>
                    <h3 class="font-orbitron font-semibold text-lg mb-2">電話</h3>
                    <p class="text-gray-300 text-sm">
                        <a href="tel:+81-3-1234-5678" class="text-cyan-400 hover:text-cyan-300 transition-colors">
                            03-1234-5678
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* Custom form styles */
.form-label {
    color: #e2e8f0;
}

.form-required {
    color: #f87171;
}

.form-input {
    background: rgba(55, 65, 81, 0.5);
    border: 1px solid rgba(107, 114, 128, 0.3);
    color: #f9fafb;
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: rgba(34, 211, 238, 0.5);
    background: rgba(55, 65, 81, 0.7);
}

.form-input::placeholder {
    color: #9ca3af;
}
</style> 