
window.onload = function () {
    var running = false;
    var localStore = storageAvailable('sessionStorage');

    var startLatHist = [];
    var startLongHist = [];
    var latHist = [];
    var longHist = [];
    var timeHist = [];

    getLoc();
    //Check if there is a localStorage to pull from
    if (localStorage.getItem('latHist')) {
        inputData(true);
    }

    var startLat = 0;
    var startLong = 0;
    var latitude = 0;
    var longitude = 0;
    var latText = document.getElementById("lat");
    var longText = document.getElementById("long");

    var tenths = 0;
    var seconds = 0;
    var minutes = 0;
    var timerText = document.getElementById("timer");
    var button = document.getElementById("timerbutton");
    var clear = document.getElementById("clear");

    var intervalA;
    var intervalB;
    button.onclick = function buttonPress() {
        running = !running;
        if (running) {
            getLoc();
            button.textContent = "Stop";
            intervalA = setInterval(runTime, 10);
            intervalB = setInterval(getLoc, 1000);
        }
        else {
            button.textContent = "Start";
            clearInterval(intervalA);
            clearInterval(intervalB);
            storeData();
            inputData(false);
            reset();

        }
        
    }

    clear.onclick = function clearHist() {
        localStorage.clear();
        var table = document.getElementById("history");
        table.innerHTML = null;
    }

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
        timer.innerHTML = timeToString(minutes, seconds, tenths);
    }

    function getLoc() {
        function success(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            if (startLat == 0) {
                startLat = latitude;
                startLong = longitude;
            }
            if (running) {
                latText.innerHTML = latitude;
                longText.innerHTML = longitude;
            }
        }
        function error() {
           
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }

    function storeData() {
        if (localStore) {
            startLatHist.push(startLat);
            startLongHist.push(startLong);
            latHist.push(latitude);
            longHist.push(longitude);
            timeHist.push(timeToString(minutes, seconds, tenths));
            localStorage.setItem('startLatHist', JSON.stringify(startLatHist));
            localStorage.setItem('startLongHist', JSON.stringify(startLongHist));
            localStorage.setItem('latHist', JSON.stringify(latHist));
            localStorage.setItem('longHist', JSON.stringify(longHist));
            localStorage.setItem('timeHist', JSON.stringify(timeHist));
        }
    }

    function inputData(loadHist) {
        startLatHist = JSON.parse(localStorage.getItem('startLatHist'));
        startLongHist = JSON.parse(localStorage.getItem('startLongHist'));
        latHist = JSON.parse(localStorage.getItem('latHist'));
        longHist = JSON.parse(localStorage.getItem('longHist'));
        timeHist = JSON.parse(localStorage.getItem('timeHist'));
        var table = document.getElementById("history");
        if (loadHist) {
            for (i = 0; i < latHist.length; ++i) {
                var row = table.insertRow(0);
                row.style.opacity = 0;
                row.innerHTML = "<p> Start <br /> Latitude: " + startLatHist[i] + " Longitude: " + startLongHist[i] + " <br /> End <br /> Latitude: " + latHist[i] + " Longitude: " + longHist[i] + " <br /> ElapsedTime: " + timeHist[i] + "</p>";
                unfade(row);
            }
        }
        else {
            var i = latHist.length - 1
            var row = table.insertRow(0);
            row.style.opacity = 0;
            row.innerHTML = "<p> Start <br /> Latitude: " + startLatHist[i] + " Longitude: " + startLongHist[i] + " <br /> End <br /> Latitude: " + latHist[i] + " Longitude: " + longHist[i] + " <br /> ElapsedTime: " + timeHist[i] + "</p>";
            unfade(row);
        }
    }

    function reset() {
        latitude = 0;
        longitude = 0;
        tenths = 0;
        seconds = 0;
        minutes = 0;
        latText.innerHTML = latitude + ".0";
        longText.innerHTML = longitude + ".0";
        timer.innerHTML = timeToString(minutes, seconds, tenths);
    }

    function timeToString(minutes, seconds, tenths) {

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

    function unfade(element) {
        var op = 0.1;
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op +=  0.01;
        }, 10);
    }

    function fade(element) {
        var op = 1;  // initial opacity
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

}