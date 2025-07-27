
let map;
let flightPath;
let aircraftMarker;
let departureMarker;
let arrivalMarker;
let isSimulating = false;
let simulationInterval;

const flightData = {
    departure: { lat: 26.1958, lng: 127.6458, name: "那覇空港", code: "OKA" },
    arrival: { lat: 34.4348, lng: 135.2441, name: "関西国際空港", code: "KIX" },
    currentPosition: { lat: 28.8, lng: 130.2 },
    progress: 0.65
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
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
        zoomControl: true
    });

    createFlightPath();
    createMarkers();
    updateAircraftPosition();
    startDataUpdate();
}

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
    const dLng = (end.lng - start.lng) * Math.PI / 180;
    const lat1 = start.lat * Math.PI / 180;
    const lat2 = end.lat * Math.PI / 180;
    const y = Math.sin(dLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
    return Math.atan2(y, x) * 180 / Math.PI;
}

function updateAircraftPosition() {
    const lat = flightData.departure.lat + (flightData.arrival.lat - flightData.departure.lat) * flightData.progress;
    const lng = flightData.departure.lng + (flightData.arrival.lng - flightData.departure.lng) * flightData.progress;

    flightData.currentPosition = { lat, lng };
    if (aircraftMarker) {
        aircraftMarker.setPosition(flightData.currentPosition);
    }

    const progressPercent = flightData.progress * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';
    document.getElementById('aircraftMarker').style.left = progressPercent + '%';
}

function centerOnAircraft() {
    map.setCenter(flightData.currentPosition);
    map.setZoom(8);
}

function showFullRoute() {
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(flightData.departure);
    bounds.extend(flightData.arrival);
    bounds.extend(flightData.currentPosition);
    map.fitBounds(bounds);
}

function toggleSimulation() {
    const btn = document.getElementById('simulationBtn');
    if (isSimulating) {
        clearInterval(simulationInterval);
        isSimulating = false;
        btn.textContent = 'シミュレーション';
        btn.classList.remove('active');
    } else {
        isSimulating = true;
        btn.textContent = '停止';
        btn.classList.add('active');
        simulationInterval = setInterval(() => {
            if (flightData.progress < 1) {
                flightData.progress += 0.005;
                updateAircraftPosition();
                updateFlightInfo();
            } else {
                toggleSimulation();
            }
        }, 100);
    }
}

function updateFlightInfo() {
    const totalDistance = 1159;
    const remainingDistance = Math.round(totalDistance * (1 - flightData.progress));
    document.getElementById('remainingDistance').textContent = remainingDistance + ' km';

    const currentTime = new Date();
    const remainingTime = (remainingDistance / 845) * 60;
    const eta = new Date(currentTime.getTime() + remainingTime * 60000);
    document.getElementById('eta').textContent = 
        eta.getHours().toString().padStart(2, '0') + ':' + 
        eta.getMinutes().toString().padStart(2, '0');
}

function startDataUpdate() {
    setInterval(() => {
        const speed = 840 + Math.random() * 10;
        const altitude = 11200 + Math.random() * 200;
        document.getElementById('speed').textContent = Math.round(speed) + ' km/h';
        document.getElementById('altitude').textContent = Math.round(altitude).toLocaleString() + ' m';
    }, 2000);
}

window.initMap = initMap;

document.addEventListener('DOMContentLoaded', function () {
    updateAircraftPosition();
});
