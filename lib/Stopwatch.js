
window.onload = function () {
    var running = false;
    var storage = new Array();
    storage[0] = {};
    var localStore = storageAvailable('sessionStorage');
    if (localStorage.getItem('cleared') == "0") {
        getData();
    }
    if (!navigator.geolocation) {
        alert("Browser does not support geolocation");
    }
    requestLoc();
    var table = document.getElementById("history");

    var startLoc = [2];
    var stopLoc = [2];
    var latText = document.getElementById("lat");
    var longText = document.getElementById("long");
   
    var interval;
    var watchID;
    var button = document.getElementById("timerbutton");
    button.onclick = function buttonPress() {
        running = !running;
        if (running) {
            button.textContent = "Stop";
            requestLoc();
            pushStartInfo();
            interval = setInterval(runTime, 10);
            watchID = navigator.geolocation.watchPosition(function (position) {
                stopLoc[0] = position.coords.latitude;
                stopLoc[1] = position.coords.longitude;
                latText.innerHTML = stopLoc[0];
                longText.innerHTML = stopLoc[1];
            });
        }
        else {
            button.textContent = "Start";
            clearInterval(interval);
            navigator.geolocation.clearWatch(watchID);
            pushStopInfo();
            reset();
        }
        
    }

    var clear = document.getElementById("clear");
    clear.onclick = function clearHist() {
        //Had issues with clearing persisting at random
        localStorage.setItem('cleared', "1" )
        localStorage.clear();
        table.innerHTML = "";
    }

    var tenths = 0;
    var seconds = 0;
    var minutes = 0;
    var timerText = document.getElementById("timer");
    function runTime() {
        tenths++;
        if (tenths > 99) {
            seconds++;
            tenths = 0;
        }
        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }
        timer.innerHTML = timerToString(minutes, seconds, tenths);
    }

    function pushStartInfo() {
        var i = storage.length;
        storage[i] = {};
        storage[i][0] = startLoc[0];
        storage[i][1] = startLoc[1];
        storage[i][2] = timezoneExtract();
        var row = table.insertRow(0);
        row.style.opacity = 0;
        row.innerHTML = "Start </br> Latitude: " + storage[i][0] + " Longitutde: " + storage[i][1]
            + "</br> Time: " + storage[i][2] + "</br>";
        unfade(row);
    }

    function pushStopInfo() {
        var i = storage.length - 1;
        storage[i][3] = stopLoc[0];
        storage[i][4] = stopLoc[1];
        storage[i][5] = timezoneExtract();
        storage[i][6] = timerToString(minutes, seconds, tenths);
        var row = table.insertRow(1);
        row.style.opacity = 0;
        row.innerHTML = "Stop </br > Latitude: " + storage[i][3]
            + " Longitude: " + storage[i][4] + "</br> Time: " + storage[i][5] + "</br> Elapsed Time: "
            + storage[i][6];
        unfade(row);
        storeData();
    }

    function storeData() {
        if (localStore) {
            localStorage.setItem('vals', JSON.stringify(storage));
            localStorage.setItem('cleared', "0");
        }
    }
    
    function getData() {
        var table = document.getElementById("history");
        storage = JSON.parse(localStorage.getItem('vals'));
        for (i = 1; i < storage.length; ++i) {
            var row = table.insertRow(0);
            row.style.opacity = 0;
            row.innerHTML = "Start </br> Latitude: " + storage[i][0] + " Longitutde: " + storage[i][1]
                + "</br> Time: " + storage[i][2] + "</br> Stop </br> Latitude: " + storage[i][3]
                + " Longitude: " + storage[i][4] + "</br> Time: " + storage[i][5] + "</br> Elapsed Time: "
                + storage[i][6];
            unfade(row);
        }
    }

    function requestLoc() {
        navigator.geolocation.getCurrentPosition(function (position) {
            startLoc[0] = position.coords.latitude;
            startLoc[1] = position.coords.longitude;
        });
    }

    function reset() {
        latitude = 0;
        longitude = 0;
        tenths = 0;
        seconds = 0;
        minutes = 0;
        latText.innerHTML = latitude + ".0";
        longText.innerHTML = longitude + ".0";
        timer.innerHTML = timerToString(minutes, seconds, tenths);
    }
}

//Check if storage is available
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

//Convert variables to a single string
function timerToString(minutes, seconds, tenths) {
    var string = minutes + ":";
    if (seconds < 9) {
        string += "0" + seconds;
    }
    else {
        string += seconds;
    }
    string += "."
    if (tenths < 9) {
        string += "0" + tenths;
    }
    else {
        string += tenths;
    }
    return string
}

function timezoneExtract() {
    var split = new Date().toString().split(" ");
    var timeZoneFormatted = "";
    for (i = 4; i < split.length; i++) {
        timeZoneFormatted += split[i] + " ";
    }
    return timeZoneFormatted;
}

function unfade(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 0.01;
    }, 10);
}

function fade(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= 0.01;
    }, 10);
}