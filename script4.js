// === PARAMETERS ===
const unitRate = 30; // Rs. per unit (kWh)
const powerAvgWatts = 250; // average power in watts (replace with live average if needed)

// === CALCULATE ESTIMATED BILL ===
function updateBillEstimate() {
    // Estimate monthly energy usage: Power × Time (in hours) / 1000 = kWh
    // Assume ~6 hours/day usage for now
    const hoursPerDay = 6;
    const daysPerMonth = 30;

    const monthlyEnergyKWh = (powerAvgWatts * hoursPerDay * daysPerMonth) / 1000;
    const estimatedCost = monthlyEnergyKWh * unitRate;

    // Display values
    document.getElementById("monthlyUnits").textContent = monthlyEnergyKWh.toFixed(1);
    document.getElementById("estimatedBill").textContent = estimatedCost.toFixed(2);
}

// Call once on load
updateBillEstimate();
