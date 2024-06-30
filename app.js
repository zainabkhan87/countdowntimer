// Set the target countdown end time (in minutes)
const countdownMinutes = 2880;

function startCountdown() {
    // Calculate the end time of the countdown
    let endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + countdownMinutes);
    
    // Update the countdown every second
    let countdownInterval = setInterval(function() {
        // Get the current time
        let currentTime = new Date().getTime();
        
        // Calculate the remaining time in milliseconds
        let distance = endTime - currentTime;
        
        // Time calculations for hours, minutes and seconds
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Format minutes and seconds with leading zeros if less than 10
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;
        
        // Display the countdown timer in the "countdown" div
        document.getElementById("countdown").innerText = hours + ":" + minutes + ":" + seconds;
        
        // If the countdown is finished, clear the interval
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerText = "00:00:00";
            alert("Countdown finished!");
        }
    }, 1000); // Update every second
}

// Start the countdown when the page is loaded
startCountdown();
