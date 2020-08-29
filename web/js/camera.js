let $upCameraButton;
let $downCameraButton;
let $humidityData;
let $humidityContainer;
let $temperatureData;
let $temperatureContainer;

$(document).ready(function () {
    $upCameraButton = $('#camera-servo-move-up');
    $downCameraButton = $('#camera-servo-move-down');

    $humidityData = $('#humidity-data');
    $humidityContainer = $('#humidity-container');
    $temperatureData = $('#temperature-data');
    $temperatureContainer = $('#temperature-container');

    setupCameraPlayer();
    setupCameraButtons();
    updateTempHum();
});

function setupCameraPlayer() {
    var player = videojs('raspi-cam');
    player.play();
}

function setupCameraButtons() {
    $upCameraButton.click(modeCameraUp);
    $downCameraButton.click(modeCameraDown);
}


function modeCameraUp() {
    $.get({url: "arduino-cmds/php/move_camera_up.php"});
}

function modeCameraDown() {
    $.get({url: "arduino-cmds/php/move_camera_down.php"});
}


function updateTempHum() {
    getTempHumFromFile();
    setInterval(function () {
        getTempHumFromFile();
    }, 60000);
}

function getTempHumFromFile() {
    $.get({
        url: "logs/temp-hum.json",
        success: function (data) {
            // Parse split from slash
            let tmpHumArr = data['temp/hum'].split("/");
            let hum = tmpHumArr[0];
            let temp = tmpHumArr[1];
            displayTempHum(hum, temp);
        }
    });
}

function displayTempHum(hum, temp) {
    hum = parseFloat(hum).toFixed(1);
    temp = parseFloat(temp).toFixed(1);

    $humidityData.html(hum + "%");
    $temperatureData.html(temp + "°");

    updateHumidityColor(hum);
    updateTempColor(temp);
}

function updateHumidityColor(hum) {
    if(hum > 90)
        $humidityContainer.addClass('more-than-ninety');
    else if(hum > 80)
        $humidityContainer.addClass('more-than-eighty');
    else if(hum > 70)
        $humidityContainer.addClass('more-than-seventy');
    else if(hum > 60)
        $humidityContainer.addClass('more-than-sixty');
}

function updateTempColor(temp) {
    if(temp > 24)
        $temperatureContainer.addClass('hot');
    else if(temp < 21)
        $temperatureContainer.addClass('cold');
}