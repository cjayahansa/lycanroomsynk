const ctx = document.getElementById("monthlyPowerChart").getContext("2d");

const monthlyPower = [12, 15, 18, 14, 20, 22, 19, 17, 21, 25, 23, 26]; // Replace with real data
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

new Chart(ctx, {
    type: "bar",
    data: {
        labels: months,
        datasets: [
            {
                label: "kWh",
                data: monthlyPower,
                backgroundColor: "#0d6efd",
                borderRadius: 5,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {display: false},
            title: {
                display: true,
                text: "Monthly Power Consumption",
                color: "#fff",
                font: {size: 18},
            },
        },
        scales: {
            x: {
                ticks: {color: "#ccc"},
                grid: {color: "#333"},
            },
            y: {
                beginAtZero: true,
                title: {display: true, text: "kWh", color: "#ccc"},
                ticks: {color: "#ccc"},
                grid: {color: "#333"},
            },
        },
    },
});
