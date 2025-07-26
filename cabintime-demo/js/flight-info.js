const totalMinutes = 135;
let elapsed = 73; // 135 - 62 = 73
let remaining = totalMinutes - elapsed;
let distance = 476;  // 少しだけ戻す（およそ8km/min換算）
let fullDistance = 1154;
let progress = 54;
let progressX = 338;

let altitude = 10668;
let speed = 892;
let temperature = -54;

const arrivalBase = new Date();
arrivalBase.setMinutes(arrivalBase.getMinutes() + remaining);

function formatTime(date) {
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
}

function updateFlightDisplay() {
    console.log("updateFlightDisplay開始");
    
    const newArrival = new Date();
    newArrival.setMinutes(newArrival.getMinutes() + remaining);

    const timeText = remaining + "分";
    
    // 各要素を個別に更新し、結果をログ出力
    const timeLeftElement = document.getElementById("time-left");
    console.log("time-left要素:", timeLeftElement);
    if (timeLeftElement) {
        timeLeftElement.textContent = timeText;
        console.log("time-left更新:", timeText);
    }
    
    const timeLeftHeaderElement = document.getElementById("time-left-header");
    console.log("time-left-header要素:", timeLeftHeaderElement);
    if (timeLeftHeaderElement) {
        timeLeftHeaderElement.textContent = timeText;
        console.log("time-left-header更新:", timeText);
    }
    
    const timeLeftHeroElement = document.getElementById("time-left-hero");
    console.log("time-left-hero要素:", timeLeftHeroElement);
    if (timeLeftHeroElement) {
        timeLeftHeroElement.textContent = timeText;
        console.log("time-left-hero更新:", timeText);
    }
    
    const timeLeftFooterElements = document.querySelectorAll("#time-left-footer, [id='time-left-footer']");
    console.log("time-left-footer要素数:", timeLeftFooterElements.length);
    timeLeftFooterElements.forEach((element, index) => {
        if (element) {
            element.textContent = timeText;
            console.log(`time-left-footer[${index}]更新:`, timeText);
        }
    });

    const timeLeftSvgElement = document.getElementById("time-left-svg");
    if (timeLeftSvgElement) timeLeftSvgElement.textContent = "残り: " + remaining + "m";
    
    const arrivalTimeElement = document.getElementById("arrival-time");
    if (arrivalTimeElement) arrivalTimeElement.textContent = formatTime(newArrival);
    
    const distanceLeftElement = document.getElementById("distance-left");
    if (distanceLeftElement) distanceLeftElement.textContent = "約 " + distance + " km";
    
    const distanceTotalElement = document.getElementById("distance-total");
    if (distanceTotalElement) distanceTotalElement.textContent = (fullDistance - distance) + " km";
    
    // 新しい距離表示要素も更新
    const distanceTotalEnhancedElement = document.getElementById("distance-total-enhanced");
    if (distanceTotalEnhancedElement) distanceTotalEnhancedElement.textContent = fullDistance + " km";
    
    const elapsedTimeElement = document.getElementById("elapsed-time");
    if (elapsedTimeElement) elapsedTimeElement.textContent = "経過: " + Math.floor(elapsed / 60) + "h" + (elapsed % 60) + "m";
    
    const progressTextElement = document.getElementById("progress-text");
    if (progressTextElement) progressTextElement.textContent = progress + "%";
    
    const progressLineElement = document.getElementById("progress-line");
    if (progressLineElement) progressLineElement.setAttribute("x2", progressX);
    
    const currentCircleElement = document.getElementById("current-circle");
    if (currentCircleElement) currentCircleElement.setAttribute("cx", progressX);
    
    // 新しい洗練されたプログレスバーの更新
    const progressFillEnhanced = document.getElementById('progress-fill-enhanced');
    const aircraftPositionEnhanced = document.getElementById('aircraft-position-enhanced');
    const progressPercentageEnhanced = document.getElementById('progress-percentage-enhanced');
    
    if (progressFillEnhanced && aircraftPositionEnhanced && progressPercentageEnhanced) {
        // 実際のフライト進捗率を計算（経過時間 / 全体時間 × 100）
        const flightProgressPercentage = Math.round((elapsed / totalMinutes) * 100);
        
        progressFillEnhanced.style.width = flightProgressPercentage + '%';
        aircraftPositionEnhanced.style.left = flightProgressPercentage + '%';
        progressPercentageEnhanced.style.left = flightProgressPercentage + '%';
        progressPercentageEnhanced.textContent = flightProgressPercentage + '%';
        
        console.log(`Enhanced progress bar updated: ${elapsed}/${totalMinutes}分 (${flightProgressPercentage}%)`);
    }
    
    // デバッグ用ログ
    console.log("残り時間更新:", timeText);
    console.log("time-left-header要素:", document.getElementById("time-left-header") ? "見つかった" : "見つからない");
    console.log("time-left-footer要素数:", timeLeftFooterElements.length);
}

function updateMinute() {
    console.log("updateMinute called - 残り時間:", remaining);
    if (remaining <= 0) return;

    elapsed++;
    remaining--;
    distance -= 8;
    progress += 1;
    progressX += 2;

    updateFlightDisplay();
}

function fluctuateAltitude() {
    const fluctuation = Math.floor(Math.random() * 41) - 20;
    const altitudeElement = document.getElementById("altitude");
    if (altitudeElement) altitudeElement.textContent = (altitude + fluctuation) + " m";
}

function fluctuateSpeed() {
    const fluctuation = Math.floor(Math.random() * 21) - 10;
    const speedElement = document.getElementById("speed");
    if (speedElement) speedElement.textContent = (speed + fluctuation) + " km/h";
}

function fluctuateTemperature() {
    const fluctuation = Math.floor(Math.random() * 5) - 2;
    const tempElement = document.getElementById("temperature");
    if (tempElement) tempElement.textContent = (temperature + fluctuation) + "°C";
}

// DOMの読み込み完了を待つ
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM読み込み完了");
    
    // 初期表示
    updateFlightDisplay();
    
    // インターバル設定
    setInterval(updateMinute, 60000);  // 1分ごと
    setInterval(fluctuateAltitude, 3000);  // 3秒ごと
    setInterval(fluctuateSpeed, 3000);     // 3秒ごと
    setInterval(fluctuateTemperature, 5000); // 5秒ごと
    
    // テスト用：10秒ごとに手動で時間を更新（デバッグ用）
    // setInterval(updateMinute, 10000);

    // スクロール機能の実装
    const containers = document.querySelectorAll('.content-grid-container');
    
    containers.forEach(container => {
        const contentGrid = container.querySelector('.content-grid');
        const leftArrow = container.querySelector('.scroll-left');
        const rightArrow = container.querySelector('.scroll-right');
        
        // スクロール量の計算（コンテンツカードの幅 + ギャップ）
        const scrollAmount = 215; // カードの幅(200px) + ギャップ(15px)
        
        if (leftArrow && rightArrow) {
            // 左矢印クリック
            leftArrow.addEventListener('click', () => {
                contentGrid.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            // 右矢印クリック
            rightArrow.addEventListener('click', () => {
                contentGrid.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            // スクロール位置に応じて矢印の表示/非表示を制御
            const updateArrowVisibility = () => {
                const isAtStart = contentGrid.scrollLeft === 0;
                const isAtEnd = contentGrid.scrollLeft + contentGrid.clientWidth >= contentGrid.scrollWidth;
                
                leftArrow.style.opacity = isAtStart ? '0' : '1';
                rightArrow.style.opacity = isAtEnd ? '0' : '1';
            };
            
            contentGrid.addEventListener('scroll', updateArrowVisibility);
            window.addEventListener('resize', updateArrowVisibility);
            
            // 初期状態の矢印表示を設定
            updateArrowVisibility();
        }
    });
});

// ページが完全に読み込まれた後の保険
window.addEventListener('load', function() {
    console.log("ページ読み込み完了");
    // 1秒後に再度実行（保険）
    setTimeout(function() {
        updateFlightDisplay();
    }, 1000);
});

// 手動テスト用関数（ブラウザコンソールで実行可能）
window.testProgressBar = function() {
    if (elapsed !== undefined) {
        console.log('Current flight data:');
        console.log('Total minutes:', totalMinutes);
        console.log('Elapsed minutes:', elapsed);
        console.log('Remaining minutes:', remaining);
        updateFlightDisplay();
    } else {
        console.log('Flight data not available yet');
    }
};