let $upCameraButton;
let $downCameraButton;

$(document).ready(function () {
    $upCameraButton = $('#camera-servo-move-up');
    $downCameraButton = $('#camera-servo-move-down');

    setupCameraButtons();
});

function setupCameraButtons() {
    $upCameraButton.click(function () {
        modeCameraUp();
    });
    $downCameraButton.click(function () {
        modeCameraDown();
    });
}


function modeCameraUp() {
    $.get({
        url: "arduino-cmds/php/move_camera_up.php",
        success: function (data) {
            let result = $.parseJSON(data);
            console.log("data", data);
            console.log("result", result);
        }
    });
}

function modeCameraDown() {
    $.get({
        url: "arduino-cmds/php/move_camera_down.php",
        success: function (data) {
            let result = $.parseJSON(data);
            console.log("data", data);
            console.log("result", result);
        }
    });
}