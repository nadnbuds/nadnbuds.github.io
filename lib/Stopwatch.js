var running = false;
var tenths = 0;
var seconds = 0;
var interval;


function buttonPress() {
    running = !running;
    var button = document.getElementById("timerbutton");
    if (running){
        button.textContent = "Stop";
        interval = setInterval(getTime, 10);
    } 
    else
        button.textContent = "Start";
    getLoc();
}

function getTime() {
    var output = document.getElementById("output");
    var endTime;
    while (running) {
        output.innerHTML = "<p>" + (endTime = Date.now()) - startTime + "</p>";
    }
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