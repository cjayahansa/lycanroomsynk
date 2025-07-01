// Import Firebase modules (if using Firebase v8)
import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js";

// Firebase config
const firebaseConfig = {
                apiKey: "AIzaSyDo3eZIkYaMOoT1cVp5Il6CHsxIIb5xQ_0",
                authDomain: "flutterfirebase-dc911.firebaseapp.com",
                databaseURL: "https://flutterfirebase-dc911-default-rtdb.asia-southeast1.firebasedatabase.app",
                projectId: "flutterfirebase-dc911",
                storageBucket: "flutterfirebase-dc911.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to EnergyData node
const energyRef = ref(database, 'EnergyData');

// Listen for real-time updates
onValue(energyRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
        const voltage = data.Voltage ?? 0;
        const current = data.Current ?? 0;
        const power = data.Power ?? 0;



        // Update HTML elements
        document.getElementById("voltage").textContent = voltage.toFixed(1) + " V";
        document.getElementById("current").textContent = current.toFixed(2) + " A";
        document.getElementById("power").textContent = power.toFixed(2) + " W";
    } else {
        console.log("No data found in EnergyData.");
    }
});

