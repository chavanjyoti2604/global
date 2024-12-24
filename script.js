function updateTime() {
    const cities = {
        "new-york": "America/New_York",
        "london": "Europe/London",
        "tokyo": "Asia/Tokyo",
        "sydney": "Australia/Sydney",
        "mumbai": "Asia/Kolkata",
    };

    Object.keys(cities).forEach(city => {
        const timeZone = cities[city];
        const now = new Date().toLocaleString("en-US", { timeZone });
        const time = new Date(now);

        // Format time to display in HH:MM:SS AM/PM format
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        document.getElementById(city).textContent = formattedTime;
    });
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();
