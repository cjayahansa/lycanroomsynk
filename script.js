// Initialize min and max variables

let minTemp = null;
let maxTemp = null;


// Assuming firebase is already initialized and user authenticated

const tempRef = firebase.database().ref("EnergyData/temp");

tempRef.on("value", (snapshot) => {
    const temp = snapshot.val();

    if (temp !== null) {
        // Update the current temperature text (two places)
        document.getElementById("temperature").innerText = temp + "°C";
        document.getElementById("temperatureCurrent").innerText = temp + "°C";

        // Update the thermometer mercury height
        const meterHeight = Math.min((temp / 100) * 100, 100);
        const mercury = document.getElementById("temperature-meter");
        mercury.style.height = meterHeight + "%";

        // ✅ Change color based on temperature
        if (temp <= 10) {
            mercury.style.background = "blue";
        } else if (temp <= 20) {
            mercury.style.background = "green";
        } else if (temp <= 30) {
            mercury.style.background = "yellow";
        } else if (temp <= 40) {
            mercury.style.background = "orange";
        } else {
            mercury.style.background = "red";
        }

        // Update min temperature
        if (minTemp === null || temp < minTemp) {
            minTemp = temp;
            document.getElementById("temperatureMin").innerText = minTemp + "°C";
        }

        // Update max temperature
        if (maxTemp === null || temp > maxTemp) {
            maxTemp = temp;
            document.getElementById("temperatureMax").innerText = maxTemp + "°C";
        }
    }
});
// Initialize min/max variables for humidity

let minHumidity = null;
let maxHumidity = null;

const humidityRef = firebase.database().ref("EnergyData/humidity");

humidityRef.on("value", (snapshot) => {
    const humidity = snapshot.val();

    if (humidity !== null) {
        const meterHeight = Math.min(humidity, 100);
        const mercury = document.getElementById("humidity-meter");
        mercury.style.height = meterHeight + "%";

        // ✅ Color based on humidity level
        if (humidity <= 20) {
            mercury.style.background = "#4a90e2"; // dry blue
        } else if (humidity <= 40) {
            mercury.style.background = "#50e3c2"; // cool cyan
        } else if (humidity <= 60) {
            mercury.style.background = "#f8e71c"; // moderate yellow
        } else if (humidity <= 80) {
            mercury.style.background = "#f5a623"; // humid orange
        } else {
            mercury.style.background = "#d0021b"; // very humid red
        }

        document.getElementById("humidity").innerText = humidity + "%";
        document.getElementById("humidityCurrent").innerText = humidity + "%";

        // Update min humidity
        if (minHumidity === null || humidity < minHumidity) {
            minHumidity = humidity;
            document.getElementById("humidityMin").innerText = minHumidity + "%";
        }

        // Update max humidity
        if (maxHumidity === null || humidity > maxHumidity) {
            maxHumidity = humidity;
            document.getElementById("humidityMax").innerText = maxHumidity + "%";
        }
    }
});