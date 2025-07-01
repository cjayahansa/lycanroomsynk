// Simulate real-time sensor readings
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function updatePowerDisplay() {
    // Simulate voltage and current
    const voltage = getRandomFloat(210, 240).toFixed(1); // e.g., 230.5 V
    const current = getRandomFloat(0.2, 1.2).toFixed(2); // e.g., 0.85 A

    // Calculate power
    const power = (voltage * current).toFixed(2); // e.g., 196.93 W

    // Update UI
    document.getElementById("voltage").textContent = voltage;
    document.getElementById("current").textContent = current;
    document.getElementById("power").textContent = power;
}

// Update every second
setInterval(updatePowerDisplay, 1000);
