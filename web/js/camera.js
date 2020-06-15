let $upCameraButton;
let $downCameraButton;

$(document).ready(function () {
    $upCameraButton = $('#camera-servo-move-up');
    $downCameraButton = $('#camera-servo-move-down');

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

    $('#humidity-data').html(hum + "%");
    $('#temperature-data').html(temp + "°");
}