
const totalMinutes = 135;
let elapsed = 75;
let remaining = totalMinutes - elapsed;
let distance = 462;
let progress = 55;
let progressX = 340;

let altitude = 10668;
let speed = 892;
let fullDistance = 1154;

const arrivalBase = new Date();
arrivalBase.setMinutes(arrivalBase.getMinutes() + remaining);

function formatTime(date) {
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
}

function updateMinute() {
    if (remaining <= 0) return;

    elapsed++;
    remaining--;
    distance -= 8;
    progress += 1;
    progressX += 2;

    const newArrival = new Date();
    newArrival.setMinutes(arrivalBase.getMinutes() + remaining);

    document.getElementById("time-left").textContent = remaining + "分";
    document.getElementById("time-left-hero").textContent = remaining + "分";
    document.getElementById("arrival-time").textContent = formatTime(newArrival);
    document.getElementById("distance-left").textContent = "約 " + distance + " km";
    document.getElementById("elapsed-time").textContent = "経過: " + Math.floor(elapsed / 60) + "h" + (elapsed % 60) + "m";
    document.getElementById("progress-text").textContent = progress + "%";
    document.getElementById("progress-line").setAttribute("x2", progressX);
    document.getElementById("current-circle").setAttribute("cx", progressX);
    document.getElementById("distance-total").textContent = fullDistance + " km";
}

function fluctuateAltitude() {
    const fluctuation = Math.floor(Math.random() * 41) - 20;
    document.getElementById("altitude").textContent = (altitude + fluctuation) + " m";
}

function fluctuateSpeed() {
    const fluctuation = Math.floor(Math.random() * 21) - 10;
    document.getElementById("speed").textContent = (speed + fluctuation) + " km/h";
}

setInterval(updateMinute, 60000);
setInterval(fluctuateAltitude, 5000);
setInterval(fluctuateSpeed, 7000);
