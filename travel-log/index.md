---
layout: default
title: "旅ログ | MarsLink"
description: "旅の記憶を美しく記録。思い出を永続的に保存する観光体験アーカイブ"
keywords: "旅行記録, 観光ログ, 思い出保存, デジタルアーカイブ, トラベルジャーナル"
---

<style>
    .coming-soon-section {
        background: linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%);
        min-height: calc(100vh - 200px);
        position: relative;
        overflow: hidden;
    }
    
    .memory-card {
        position: absolute;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 20px;
        animation: float-card 20s infinite ease-in-out;
    }
    
    .memory-card:nth-child(odd) {
        animation-duration: 25s;
        animation-direction: reverse;
    }
    
    @keyframes float-card {
        0%, 100% { transform: translate(0, 0) rotate(-2deg); }
        33% { transform: translate(30px, -30px) rotate(1deg); }
        66% { transform: translate(-20px, 20px) rotate(-1deg); }
    }
    
    .timeline-dot {
        position: relative;
        width: 16px;
        height: 16px;
        background: #10b981;
        border-radius: 50%;
        box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
    }
    
    .timeline-dot::after {
        content: '';
        position: absolute;
        inset: -8px;
        border-radius: 50%;
        border: 2px solid rgba(16, 185, 129, 0.5);
        animation: pulse-ring 2s infinite;
    }
    
    @keyframes pulse-ring {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }
    
    .photo-stack {
        transform-style: preserve-3d;
        transform: perspective(1000px) rotateY(-15deg);
    }
    
    .photo-stack > div {
        position: absolute;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
    }
    
    .photo-stack > div:nth-child(1) { transform: translateZ(0px); }
    .photo-stack > div:nth-child(2) { transform: translateZ(-20px) translateX(10px); }
    .photo-stack > div:nth-child(3) { transform: translateZ(-40px) translateX(20px); }
</style>

<section class="coming-soon-section relative">
    <!-- Floating Memory Cards -->
    <div class="memory-card top-20 left-10 w-48 h-32">
        <div class="text-green-300 opacity-50">
            <svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <div class="h-2 bg-green-300/20 rounded mb-1"></div>
            <div class="h-2 bg-green-300/20 rounded w-3/4"></div>
        </div>
    </div>
    
    <div class="memory-card bottom-32 right-20 w-56 h-36">
        <div class="text-emerald-300 opacity-50">
            <svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <div class="h-2 bg-emerald-300/20 rounded mb-1"></div>
            <div class="h-2 bg-emerald-300/20 rounded w-4/5 mb-1"></div>
            <div class="h-2 bg-emerald-300/20 rounded w-1/2"></div>
        </div>
    </div>

    <div class="container mx-auto px-6 py-24 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
            <!-- Coming Soon Badge -->
            <div class="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full mb-8">
                <span class="relative flex h-3 w-3 mr-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span class="text-green-400 font-medium">Coming Soon</span>
            </div>
            
            <!-- Title -->
            <h1 class="font-orbitron text-5xl lg:text-7xl font-black text-white mb-6">
                旅ログ
            </h1>
            
            <!-- Description -->
            <p class="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                旅の記憶を美しく記録。<br>
                思い出を永続的に保存する観光体験アーカイブ
            </p>
            
            <!-- Photo Stack Preview -->
            <div class="relative h-64 mb-16 flex items-center justify-center">
                <div class="photo-stack relative w-48 h-32">
                    <div class="w-full h-full flex items-center justify-center">
                        <svg class="w-12 h-12 text-green-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <div class="w-full h-full"></div>
                    <div class="w-full h-full"></div>
                </div>
            </div>
            
            <!-- Feature Preview -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all">
                    <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">タイムライン記録</h3>
                    <p class="text-gray-400 text-sm">時系列で旅の軌跡を美しくアーカイブ</p>
                </div>
                
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all">
                    <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">マルチメディア対応</h3>
                    <p class="text-gray-400 text-sm">写真・動画・音声・テキストを統合保存</p>
                </div>
                
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all">
                    <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 10-15.432 0m15.432 0A9.004 9.004 0 0012 21a9.004 9.004 0 00-5.716-2.684"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">共有機能</h3>
                    <p class="text-gray-400 text-sm">大切な人と旅の思い出を簡単シェア</p>
                </div>
            </div>
            
            <!-- Timeline Preview -->
            <div class="flex items-center justify-center mb-12">
                <div class="flex items-center space-x-8">
                    <div class="timeline-dot"></div>
                    <div class="h-1 w-24 bg-gradient-to-r from-green-500 to-green-400"></div>
                    <div class="timeline-dot"></div>
                    <div class="h-1 w-24 bg-gradient-to-r from-green-400 to-green-300"></div>
                    <div class="timeline-dot"></div>
                </div>
            </div>
            
            <!-- Progress Indicator -->
            <div class="mb-12">
                <p class="text-gray-400">現在開発中...</p>
            </div>
            
            <!-- CTA -->
            <div class="space-y-4">
                <p class="text-lg text-gray-300 mb-6">
                    本サービスに関するお問い合わせや<br class="sm:hidden">
                    パートナーシップをご希望の方はこちら
                </p>
                <a href="{{ '/contact/' | relative_url }}" class="inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                    <span class="mr-2">お問い合わせ</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>