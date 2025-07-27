let map;
let flightPath;
let aircraftMarker;
let departureMarker;
let arrivalMarker;
let simulationRunning = true;
let simulationInterval;
let dataUpdateInterval;

const flightData = {
    departure: { lat: 26.1958, lng: 127.6458, name: "那覇空港", code: "OKA" },
    arrival: { lat: 34.4348, lng: 135.2441, name: "関西国際空港", code: "KIX" },
    currentPosition: { lat: 28.2277, lng: 129.5197 },
    progress: 0.247
};

function initMap() {
    // Ensure map container exists
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Map container not found');
        // Retry after a short delay
        setTimeout(() => {
            if (document.getElementById('map')) {
                initMap();
            }
        }, 500);
        return;
    }

    // Force container size on mobile
    if (window.innerWidth <= 768) {
        mapElement.style.height = 'calc(100vh - 60px)';
        mapElement.style.minHeight = '500px';
    }

    map = new google.maps.Map(mapElement, {
        zoom: 6,
        center: { lat: 30.0, lng: 130.0 },
        mapTypeId: 'terrain',
        styles: [
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#1f4e79' }] },
            { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#2d3748' }] },
            { featureType: 'road', stylers: [{ visibility: 'off' }] },
            { featureType: 'poi', stylers: [{ visibility: 'simplified' }] }
        ],
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'greedy' // Better mobile interaction
    });

    createFlightPath();
    createMarkers();
    updateAircraftPosition();
    startDataUpdate();
    startFlightProgress();

    // Force map resize on mobile
    setTimeout(() => {
        if (map) {
            google.maps.event.trigger(map, 'resize');
        }
    }, 100);
}

// Ensure initMap is called after DOM and Google Maps API are ready
let mapInitialized = false;

function tryInitMap() {
    if (mapInitialized) return;
    
    if (typeof google !== 'undefined' && google.maps && document.getElementById('map')) {
        mapInitialized = true;
        initMap();
    } else {
        // Wait a bit longer for Google Maps API
        setTimeout(tryInitMap, 200);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    tryInitMap();
});

// Fallback: Initialize after page load
window.addEventListener('load', () => {
    if (!mapInitialized) {
        setTimeout(() => {
            tryInitMap();
        }, 500);
    }
});

function createFlightPath() {
    const flightPlanCoordinates = [flightData.departure, flightData.arrival];
    flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#00a8ff',
        strokeOpacity: 0.8,
        strokeWeight: 3
    });
    flightPath.setMap(map);
}

// createAircraftIcon関数を削除し、直接画像アイコンを使用

function createMarkers() {
    departureMarker = new google.maps.Marker({
        position: flightData.departure,
        map: map,
        title: `${flightData.departure.name} (${flightData.departure.code})`,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: '#00c2ff',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
        }
    });

    arrivalMarker = new google.maps.Marker({
        position: flightData.arrival,
        map: map,
        title: `${flightData.arrival.name} (${flightData.arrival.code})`,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: '#00a8ff',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
        }
    });

    aircraftMarker = new google.maps.Marker({
        position: flightData.currentPosition,
        map: map,
        title: 'ML478 - Current Position',
        icon: {
            url: 'assets/plane-b787.png',
            scaledSize: new google.maps.Size(48, 48),
            anchor: new google.maps.Point(24, 24)
        },
        zIndex: 1000
    });
}

function calculateBearing(start, end) {
    const startLat = start.lat * Math.PI / 180;
    const startLng = start.lng * Math.PI / 180;
    const endLat = end.lat * Math.PI / 180;
    const endLng = end.lng * Math.PI / 180;

    const dLng = endLng - startLng;
    const y = Math.sin(dLng) * Math.cos(endLat);
    const x = Math.cos(startLat) * Math.sin(endLat) - Math.sin(startLat) * Math.cos(endLat) * Math.cos(dLng);
    
    let bearing = Math.atan2(y, x) * 180 / Math.PI;
    return (bearing + 360) % 360;
}

function updateAircraftPosition() {
    const lat = flightData.departure.lat + (flightData.arrival.lat - flightData.departure.lat) * flightData.progress;
    const lng = flightData.departure.lng + (flightData.arrival.lng - flightData.departure.lng) * flightData.progress;

    flightData.currentPosition = { lat, lng };
    if (aircraftMarker) {
        aircraftMarker.setPosition(flightData.currentPosition);
        
        // 飛行機の画像アイコンを使用（回転は画像ファイル自体の向きに依存）
        aircraftMarker.setIcon({
            url: 'assets/plane-b787.png',
            scaledSize: new google.maps.Size(48, 48),
            anchor: new google.maps.Point(24, 24)
        });
    }

    const progressPercent = flightData.progress * 100;
    const progressFill = document.getElementById('progressFill');
    const aircraftMarkerEl = document.getElementById('aircraftMarker');
    
    if (progressFill) {
        progressFill.style.width = progressPercent + '%';
    }
    if (aircraftMarkerEl) {
        aircraftMarkerEl.style.left = progressPercent + '%';
    }
}

function updateFlightInfo() {
    const totalDistance = 1159;
    const remainingDistance = Math.round(totalDistance * (1 - flightData.progress));
    
    const remainingDistanceEl = document.getElementById('remainingDistance');
    if (remainingDistanceEl) {
        remainingDistanceEl.textContent = remainingDistance + ' km';
    }

    const currentTime = new Date();
    const remainingTime = (remainingDistance / 845) * 60;
    const eta = new Date(currentTime.getTime() + remainingTime * 60000);
    
    const etaEl = document.getElementById('eta');
    if (etaEl) {
        etaEl.textContent = 
            eta.getHours().toString().padStart(2, '0') + ':' + 
            eta.getMinutes().toString().padStart(2, '0');
    }

    // ヘッダーの残り時間も更新
    const remainingMinutes = Math.round(remainingTime);
    const timeLeftHeaderEl = document.getElementById('time-left-header');
    if (timeLeftHeaderEl) {
        timeLeftHeaderEl.textContent = remainingMinutes + '分';
    }
}

function startDataUpdate() {
    dataUpdateInterval = setInterval(() => {
        const speed = 840 + Math.random() * 10;
        const altitude = 11200 + Math.random() * 200;
        
        const speedEl = document.getElementById('speed');
        const altitudeEl = document.getElementById('altitude');
        
        if (speedEl) {
            speedEl.textContent = Math.round(speed) + ' km/h';
        }
        if (altitudeEl) {
            altitudeEl.textContent = Math.round(altitude).toLocaleString() + ' m';
        }
    }, 2000);
}

function startFlightProgress() {
    simulationInterval = setInterval(() => {
        if (flightData.progress < 1 && simulationRunning) {
            flightData.progress += 0.000608; // 1.5倍速用の進捗増加量
            updateAircraftPosition();
            updateFlightInfo();
        }
    }, 2000);
}

function centerOnAircraft() {
    if (map && aircraftMarker) {
        map.setCenter(flightData.currentPosition);
        map.setZoom(8);
    }
}

function showFullRoute() {
    if (map) {
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(flightData.departure);
        bounds.extend(flightData.arrival);
        map.fitBounds(bounds);
    }
}

// 不要な関数を削除
// function toggleSimulation() を削除

// Google Maps API が読み込まれたら自動的に初期化
window.initMap = initMap;

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function () {
    updateAircraftPosition();
    updateFlightInfo();
});