
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
    const newArrival = new Date();
    newArrival.setMinutes(arrivalBase.getMinutes() + remaining);

    const timeText = remaining + "分";
    document.getElementById("time-left").textContent = timeText;
    document.getElementById("time-left-hero").textContent = timeText;
    if (document.getElementById("time-left-footer")) document.getElementById("time-left-footer").textContent = timeText;

    document.getElementById("time-left-svg").textContent = "残り: " + remaining + "m";
    document.getElementById("arrival-time").textContent = formatTime(newArrival);
    document.getElementById("distance-left").textContent = "約 " + distance + " km";
    document.getElementById("distance-total").textContent = (fullDistance - distance) + " km";
    document.getElementById("elapsed-time").textContent = "経過: " + Math.floor(elapsed / 60) + "h" + (elapsed % 60) + "m";
    document.getElementById("progress-text").textContent = progress + "%";
    document.getElementById("progress-line").setAttribute("x2", progressX);
    document.getElementById("current-circle").setAttribute("cx", progressX);
}

function updateMinute() {
    console.log("updateMinute called");
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
    document.getElementById("altitude").textContent = (altitude + fluctuation) + " m";
}

function fluctuateSpeed() {
    const fluctuation = Math.floor(Math.random() * 21) - 10;
    document.getElementById("speed").textContent = (speed + fluctuation) + " km/h";
}

function fluctuateTemperature() {
    const fluctuation = Math.floor(Math.random() * 5) - 2;
    const tempEl = document.getElementById("temperature");
    if (tempEl) tempEl.textContent = (temperature + fluctuation) + "°C";
}

updateFlightDisplay();

setInterval(updateMinute, 10000);
setInterval(fluctuateAltitude, 3000);
setInterval(fluctuateSpeed, 3000);
setInterval(fluctuateTemperature, 5000);
