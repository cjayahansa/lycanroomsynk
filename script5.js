function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "2-digit",
    });
    const time = now.toLocaleTimeString("en-GB");

    document.getElementById("currentDate").textContent = date;
    document.getElementById("currentTime").textContent = time;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call
