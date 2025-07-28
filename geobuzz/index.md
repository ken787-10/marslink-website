---
layout: default
title: "GeoBuzz | MarsLink"
description: "地域の話題を可視化。位置情報と連動したトレンド分析プラットフォーム"
keywords: "GeoBuzz, 地域トレンド, 位置情報分析, 観光動向, データビジュアライゼーション"
---

<style>
    .coming-soon-section {
        background: linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%);
        min-height: calc(100vh - 200px);
        position: relative;
        overflow: hidden;
    }
    
    .data-point {
        position: absolute;
        width: 8px;
        height: 8px;
        background: rgba(16, 185, 129, 0.6);
        border-radius: 50%;
        animation: pulse-data 3s infinite;
    }
    
    .data-point::before {
        content: '';
        position: absolute;
        inset: -20px;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%);
        animation: expand-ring 3s infinite;
    }
    
    @keyframes pulse-data {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
    
    @keyframes expand-ring {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }
    
    .heatmap-grid {
        position: absolute;
        inset: 0;
        background-image: 
            linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px);
        background-size: 30px 30px;
    }
    
    .trend-line {
        stroke-dasharray: 300;
        stroke-dashoffset: 300;
        animation: draw-line 3s ease-in-out forwards;
    }
    
    @keyframes draw-line {
        to { stroke-dashoffset: 0; }
    }
    
    .buzz-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        animation: float-up 20s infinite ease-in-out;
    }
    
    @keyframes float-up {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
</style>

<section class="coming-soon-section relative">
    <!-- Heatmap Grid Background -->
    <div class="heatmap-grid"></div>
    
    <!-- Data Points Animation -->
    <div class="data-point" style="top: 20%; left: 15%; animation-delay: 0s;"></div>
    <div class="data-point" style="top: 35%; left: 70%; animation-delay: 0.5s;"></div>
    <div class="data-point" style="top: 60%; left: 40%; animation-delay: 1s;"></div>
    <div class="data-point" style="top: 75%; left: 80%; animation-delay: 1.5s;"></div>
    <div class="data-point" style="top: 50%; left: 25%; animation-delay: 2s;"></div>

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
                GeoBuzz
            </h1>
            
            <!-- Description -->
            <p class="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                地域の話題を可視化。<br>
                位置情報と連動したトレンド分析プラットフォーム
            </p>
            
            <!-- Heatmap Preview -->
            <div class="buzz-card rounded-2xl p-8 max-w-2xl mx-auto mb-16">
                <svg class="w-full h-48" viewBox="0 0 400 150">
                    <defs>
                        <radialGradient id="heat1" cx="50%" cy="50%">
                            <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.8" />
                            <stop offset="50%" style="stop-color:#34d399;stop-opacity:0.4" />
                            <stop offset="100%" style="stop-color:#34d399;stop-opacity:0" />
                        </radialGradient>
                        <radialGradient id="heat2" cx="50%" cy="50%">
                            <stop offset="0%" style="stop-color:#34d399;stop-opacity:0.9" />
                            <stop offset="40%" style="stop-color:#4ade80;stop-opacity:0.5" />
                            <stop offset="100%" style="stop-color:#4ade80;stop-opacity:0" />
                        </radialGradient>
                        <radialGradient id="heat3" cx="50%" cy="50%">
                            <stop offset="0%" style="stop-color:#22c55e;stop-opacity:0.7" />
                            <stop offset="60%" style="stop-color:#4ade80;stop-opacity:0.3" />
                            <stop offset="100%" style="stop-color:#4ade80;stop-opacity:0" />
                        </radialGradient>
                    </defs>
                    <!-- Heatmap cells -->
                    <circle cx="80" cy="40" r="40" fill="url(#heat1)" class="animate-pulse" style="animation-duration: 3s"/>
                    <circle cx="150" cy="80" r="50" fill="url(#heat2)" class="animate-pulse" style="animation-duration: 3.5s; animation-delay: 0.5s"/>
                    <circle cx="250" cy="50" r="35" fill="url(#heat3)" class="animate-pulse" style="animation-duration: 4s; animation-delay: 1s"/>
                    <circle cx="320" cy="90" r="45" fill="url(#heat1)" class="animate-pulse" style="animation-duration: 3.2s; animation-delay: 0.3s"/>
                    <circle cx="180" cy="120" r="30" fill="url(#heat3)" class="animate-pulse" style="animation-duration: 3.8s; animation-delay: 0.7s"/>
                    <circle cx="300" cy="30" r="25" fill="url(#heat2)" class="animate-pulse" style="animation-duration: 3.3s; animation-delay: 1.2s"/>
                    <!-- Map grid overlay -->
                    <g opacity="0.2">
                        <line x1="0" y1="50" x2="400" y2="50" stroke="#10b981" stroke-width="0.5"/>
                        <line x1="0" y1="100" x2="400" y2="100" stroke="#10b981" stroke-width="0.5"/>
                        <line x1="100" y1="0" x2="100" y2="150" stroke="#10b981" stroke-width="0.5"/>
                        <line x1="200" y1="0" x2="200" y2="150" stroke="#10b981" stroke-width="0.5"/>
                        <line x1="300" y1="0" x2="300" y2="150" stroke="#10b981" stroke-width="0.5"/>
                    </g>
                </svg>
            </div>
            
            <!-- Feature Preview -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all">
                    <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">地域トレンド分析</h3>
                    <p class="text-gray-400 text-sm">SNSデータから地域の話題をリアルタイム分析</p>
                </div>
                
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all">
                    <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">ヒートマップ表示</h3>
                    <p class="text-gray-400 text-sm">話題の密度を地図上で視覚的に表現</p>
                </div>
                
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all">
                    <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">観光インサイト</h3>
                    <p class="text-gray-400 text-sm">データから得られる観光施策のヒント</p>
                </div>
            </div>
            
            <!-- Progress Indicator -->
            <div class="mb-12">
                <div class="flex items-center justify-center space-x-2 mb-4">
                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                </div>
                <p class="text-gray-400">現在開発中...</p>
            </div>
            
            <!-- CTA -->
            <div class="space-y-4">
                <p class="text-lg text-gray-300 mb-6">
                    本サービスに関するお問い合わせや<br class="sm:hidden">
                    データ活用のご相談はこちら
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