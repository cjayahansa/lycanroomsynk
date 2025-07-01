// === Firebase LIVE BILL + UNIT UPDATE ===
function updateLiveBillFromFirebase() {
    const energyRef = firebase.database().ref("EnergyData");

    energyRef.on("value", (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const kwh = data.KWh ?? 0;
            const bill = data.Bill ?? 0;

            document.getElementById("monthlyUnits").textContent = kwh.toFixed(2);
            document.getElementById("estimatedBill").textContent = bill.toFixed(2);
        }
    });
}

// Call it once on load
updateLiveBillFromFirebase();

