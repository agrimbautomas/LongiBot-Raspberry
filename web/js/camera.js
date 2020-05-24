let $upCameraButton;
let $downCameraButton;

$(document).ready(function () {
    $upCameraButton = $('#camera-servo-move-up');
    $downCameraButton = $('#camera-servo-move-down');

    setupCameraButtons();
});

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