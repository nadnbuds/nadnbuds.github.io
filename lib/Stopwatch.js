
window.onload = function () {
    var running = false;
    var tenths = 0;
    var seconds = 0;
    var minutes = 0;
    var tenthsText = document.getElementById("tenths");
    var secondsText = document.getElementById("seconds");
    var minutesText = document.getElementById("minutes");
    var button = document.getElementById("timerbutton");

    var interval;
    button.onclick = function buttonPress() {
        running = !running;
        if (running) {
            button.textContent = "Stop";
            interval = setInterval(runTime, 10);
        }
        else {
            button.textContent = "Start";
            clearInterval(interval);
        }
        getLoc();
    }

    function runTime() {
        tenths++;
        if (tenths < 9) {
            tenthsText.innerHTML = "0" + tenths;
        }
        if (tenths > 9) {
            tenthsText.innerHTML = tenths;
        }
        if (tenths > 99) {
            seconds++;
            tenths = 0;
            tenthsText.innerHTML = 0 + tenths;
        }
        if (seconds < 9) {
            secondsText.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            secondsText.innerHTML = seconds;
        }
        if (seconds > 59) {
            minutes++;
            seconds = 0;
            secondsText.innerHTML = "0" + seconds;
        }
        minutes.innerHTML = minutes;
    }

    function getLoc() {
        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
        }
        function error() {

        }
        navigator.geolocation.getCurrentPosition(success, error);
    }
}