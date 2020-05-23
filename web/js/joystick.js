$(document).ready(function () {
    setupButton('#joystick-stop-button', '../arduino-cmds/php/stop.php');
    setupButton('#joystick-button2', '../arduino-cmds/php/move_forward.php');
    setupButton('#joystick-button4', '../arduino-cmds/php/move_left.php');
    setupButton('#joystick-button5', '../arduino-cmds/php/move_right.php');
    setupButton('#joystick-button7', '../arduino-cmds/php/move_backward.php');
});

function setupButton(selector, file, callback = null) {
    $(selector).click(function () {
        // $.get(file, function (data) {
        //     displayResponse(data)
        // });

        console.log(callback);
        console.log(callback !== null);
        if (callback !== null)
            callback();
    });


}
