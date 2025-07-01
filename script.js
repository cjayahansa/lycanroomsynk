import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "project1-dcb27.firebaseapp.com",
    databaseURL: "https://project1-dcb27-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project1-dcb27",
    storageBucket: "project1-dcb27.appspot.com",
    messagingSenderId: "911453766605",
    appId: "1:911453766605:web:b78ec1a1e8b725803eba84",
    measurementId: "G-99GYVE2N7N",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const sensorRef = ref(db, "sensorData");

onValue(sensorRef, (snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Temp:", data.temperature);
        document.getElementById("temperatureCurrent").textContent = data.temperature + "°C";
        document.getElementById("temperatureMin").textContent = data.temperature + "°C";
        document.getElementById("temperatureMax").textContent = data.temperature + "°C";
    }
});

let humidityMin = Number.POSITIVE_INFINITY;
let humidityMax = Number.NEGATIVE_INFINITY;

onValue(sensorRef, (snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();
        const humidity = data.humidity;
        console.log("Humidity:", humidity);

        // Update UI
        document.getElementById("humidityCurrent").textContent = humidity.toFixed(1) + "%";

        // Update min/max
        humidityMin = Math.min(humidityMin, humidity);
        humidityMax = Math.max(humidityMax, humidity);

        document.getElementById("humidityMin").textContent = humidityMin.toFixed(1) + "%";
        document.getElementById("humidityMax").textContent = humidityMax.toFixed(1) + "%";

        // Update mercury bar height
        const mercury = document.querySelector(".humiditymeter .mercury");
        const label = document.getElementById("humidity");
        const height = Math.min(Math.max(humidity, 0), 100);

        mercury.style.height = `${height}%`;
        label.textContent = humidity.toFixed(1) + "%";

        // Set color based on humidity level
        if (humidity <= 20) {
            mercury.style.background = "red";
        } else if (humidity <= 40) {
            mercury.style.background = "orange";
        } else if (humidity <= 60) {
            mercury.style.background = "yellow";
        } else if (humidity <= 80) {
            mercury.style.background = "green";
        } else {
            mercury.style.background = "blue";
        }
    }
});
