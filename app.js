function updateClock() {
    const locations = [
        { id: "new-york", timezone: "America/New_York", label: "New York" },
        { id: "london", timezone: "Europe/London", label: "London" },
        { id: "tokyo", timezone: "Asia/Tokyo", label: "Tokyo" },
        { id: "sydney", timezone: "Australia/Sydney", label: "Sydney" },
        { id: "mumbai", timezone: "Asia/Kolkata", label: "Mumbai" },
    ];

    locations.forEach((location) => {
        const now = new Date().toLocaleString("en-US", {
            timeZone: location.timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
        document.getElementById(location.id).innerHTML = `<strong>${location.label}</strong>: ${now}`;
    });
}

setInterval(updateClock, 1000);
updateClock();
