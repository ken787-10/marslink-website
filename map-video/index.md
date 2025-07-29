---
layout: default
title: "NIGIWAI MAP | MarsLink"
description: "地図と動画で観光体験を可視化。現地での回遊を促進する次世代プラットフォーム"
keywords: "地図連動動画, 観光マップ, 動画ガイド, 回遊促進, ロケーションベース"
---

<style>
    .coming-soon-section {
        background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%);
        min-height: calc(100vh - 200px);
        position: relative;
        overflow: hidden;
    }
    
    .map-grid {
        position: absolute;
        inset: 0;
        background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
        animation: grid-move 20s linear infinite;
    }
    
    @keyframes grid-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
    }
    
    .location-pin {
        position: absolute;
        animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
    
    .video-frame {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(59, 130, 246, 0.3);
        animation: float-rotate 15s infinite ease-in-out;
    }
    
    @keyframes float-rotate {
        0%, 100% { transform: rotate(-2deg) translateY(0); }
        50% { transform: rotate(2deg) translateY(-10px); }
    }
</style>

<section class="coming-soon-section relative">
    <!-- Animated Grid Background -->
    <div class="map-grid"></div>
    
    <!-- Location Pins -->
    <div class="location-pin top-20 left-1/4 text-blue-400">
        <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
    </div>
    
    <div class="location-pin top-40 right-1/3 text-cyan-400" style="animation-delay: 0.5s">
        <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
    </div>
    
    <div class="location-pin bottom-32 left-1/3 text-indigo-400" style="animation-delay: 1s">
        <svg class="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
    </div>

    <div class="container mx-auto px-6 py-24 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
            <!-- Coming Soon Badge -->
            <div class="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-8">
                <span class="relative flex h-3 w-3 mr-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span class="text-blue-400 font-medium">Coming Soon</span>
            </div>
            
            <!-- Title -->
            <h1 class="font-orbitron text-5xl lg:text-7xl font-black text-white mb-6">
                NIGIWAI MAP
            </h1>
            
            <!-- Description -->
            <p class="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                地図と動画で観光体験を可視化。<br>
                現地での回遊を促進する次世代プラットフォーム
            </p>
            
            <!-- Video Frame Preview -->
            <div class="video-frame rounded-2xl p-8 max-w-2xl mx-auto mb-16">
                <div class="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                    <svg class="w-20 h-20 text-blue-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
            </div>
            
            <!-- Feature Preview -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
                    <div class="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">地図連動</h3>
                    <p class="text-gray-400 text-sm">位置情報と連動した動画コンテンツを自動表示</p>
                </div>
                
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
                    <div class="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">動画ガイド</h3>
                    <p class="text-gray-400 text-sm">観光スポットの魅力を動画で分かりやすく紹介</p>
                </div>
                
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
                    <div class="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">回遊促進</h3>
                    <p class="text-gray-400 text-sm">次の目的地への導線を動画でスムーズに案内</p>
                </div>
            </div>
            
            <!-- Progress Indicator -->
            <div class="mb-12">
                <div class="flex items-center justify-center space-x-2 mb-4">
                    <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                    <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                </div>
                <p class="text-gray-400">現在開発中...</p>
            </div>
            
            <!-- CTA -->
            <div class="space-y-4">
                <p class="text-lg text-gray-300 mb-6">
                    本サービスに関するお問い合わせや<br class="sm:hidden">
                    デモンストレーションをご希望の方はこちら
                </p>
                <a href="{{ '/contact/' | relative_url }}" class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                    <span class="mr-2">お問い合わせ</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>