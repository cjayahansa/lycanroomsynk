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

        // Update the thermometer mercury height (scale temp to 100%)
        const meterHeight = Math.min((temp / 100) * 100, 100);
        document.getElementById("temperature-meter").style.height = meterHeight + "%";

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

// Assuming firebase is already initialized and user authenticated

const humidityRef = firebase.database().ref("EnergyData/humidity");

humidityRef.on("value", (snapshot) => {
    const humidity = snapshot.val();

    if (humidity !== null) {
        // Update mercury height (assuming max 100%)
        const meterHeight = Math.min(humidity, 100);
        document.getElementById("humidity-meter").style.height = meterHeight + "%";

        // Update the text labels
        document.getElementById("humidity").innerText = humidity + "%"; // inside meter label
        document.getElementById("humidityCurrent").innerText = humidity + "%"; // current humidity

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
