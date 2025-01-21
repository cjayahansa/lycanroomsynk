import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyBvl_7QAJjE3nsT3GTfaNsA61pfSUHjDaw",
  authDomain: "project1-dcb27.firebaseapp.com",
  databaseURL: "https://project1-dcb27-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project1-dcb27",
  storageBucket: "project1-dcb27.appspot.com",
  messagingSenderId: "911453766605",
  appId: "1:911453766605:web:b78ec1a1e8b725803eba84",
  measurementId: "G-99GYVE2N7N",
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const sensorDataRef = ref(database, "sensorData")

let temperatureMin = Number.POSITIVE_INFINITY
let temperatureMax = Number.NEGATIVE_INFINITY
let humidityMin = Number.POSITIVE_INFINITY
let humidityMax = Number.NEGATIVE_INFINITY

onValue(sensorDataRef, (snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val()
    updateLightIntensity(data.lux)
    updateHumidity(data.humidity)
    updateThermometer(data.temperature)
  } else {
    console.log("No data found in 'sensorData'.")
  }
})

function updateThermometer(temp) {
  const mercury = document.querySelector(".thermometer .mercury")
  const temperatureLabel = document.querySelector(".thermometer .temperature-label")
  const temperatureCurrent = document.getElementById("temperatureCurrent")
  const temperatureMinElement = document.getElementById("temperatureMin")
  const temperatureMaxElement = document.getElementById("temperatureMax")

  const height = Math.min(Math.max((temp / 50) * 100, 0), 100)
  mercury.style.height = `${height}%`

  if (temp <= 10) {
    mercury.style.background = "blue"
  } else if (temp <= 20) {
    mercury.style.background = "green"
  } else if (temp <= 30) {
    mercury.style.background = "yellow"
  } else if (temp <= 40) {
    mercury.style.background = "orange"
  } else {
    mercury.style.background = "red"
  }

  temperatureLabel.textContent = `${temp.toFixed(1)}°C`
  temperatureCurrent.textContent = `${temp.toFixed(1)}°C`

  temperatureMin = Math.min(temperatureMin, temp)
  temperatureMax = Math.max(temperatureMax, temp)

  temperatureMinElement.textContent = `${temperatureMin.toFixed(1)}°C`
  temperatureMaxElement.textContent = `${temperatureMax.toFixed(1)}°C`
}

function updateHumidity(humidity) {
  const mercury = document.querySelector(".humiditymeter .mercury")
  const humidityLabel = document.querySelector(".humiditymeter .temperature-label")
  const humidityCurrent = document.getElementById("humidityCurrent")
  const humidityMinElement = document.getElementById("humidityMin")
  const humidityMaxElement = document.getElementById("humidityMax")

  const height = Math.min(Math.max(humidity, 0), 100)
  mercury.style.height = `${height}%`

  if (humidity <= 20) {
    mercury.style.background = "red"
  } else if (humidity <= 40) {
    mercury.style.background = "orange"
  } else if (humidity <= 60) {
    mercury.style.background = "yellow"
  } else if (humidity <= 80) {
    mercury.style.background = "green"
  } else {
    mercury.style.background = "blue"
  }

  humidityLabel.textContent = `${humidity.toFixed(1)}%`
  humidityCurrent.textContent = `${humidity.toFixed(1)}%`

  humidityMin = Math.min(humidityMin, humidity)
  humidityMax = Math.max(humidityMax, humidity)

  humidityMinElement.textContent = `${humidityMin.toFixed(1)}%`
  humidityMaxElement.textContent = `${humidityMax.toFixed(1)}%`
}

function updateLightIntensity(lux) {
  const lightIntensityValue = document.querySelector(".light-intensity-value")
  const lightIntensityFill = document.querySelector(".light-intensity-fill")

  lightIntensityValue.textContent = Math.round(lux)

  // Assuming max light intensity is 1000 lux
  const fillPercentage = Math.min((lux / 1000) * 100, 100)
  lightIntensityFill.style.width = `${fillPercentage}%`

  if (lux <= 50) {
    lightIntensityFill.style.background = "linear-gradient(to right, #2c3e50, #3498db)"
  } else if (lux <= 200) {
    lightIntensityFill.style.background = "linear-gradient(to right, #3498db, #2ecc71)"
  } else if (lux <= 400) {
    lightIntensityFill.style.background = "linear-gradient(to right, #2ecc71, #f1c40f)"
  } else if (lux <= 800) {
    lightIntensityFill.style.background = "linear-gradient(to right, #f1c40f, #e67e22)"
  } else {
    lightIntensityFill.style.background = "linear-gradient(to right, #e67e22, #e74c3c)"
  }
}

// Remove the initial update calls since we're now using real-time data
// document.addEventListener("DOMContentLoaded", () => {
//   updateThermometer(25);
//   updateHumidity(45);
//   updateLightIntensity(500);
// });

