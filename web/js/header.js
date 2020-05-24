let $headerNotificationBar;
let $arduinoIcon;
let $serialIcon;

$(document).ready(function () {
    $headerNotificationBar = $('.error-bar');
    $arduinoIcon = $('#arduino-icon');
    $serialIcon = $('#serial-icon');

    set_arduino_state();
    console.log(set_serial_state());
});

function setupErrorBar(message) {
    $headerNotificationBar.children('span').text(message);
    $headerNotificationBar.qcss({'top': 0}).delay(3000).qcss({'top': -60});
}

function displayResponse(data) {
    const parsedData = JSON.parse(data);
    if (parsedData.error !== undefined)
        setupErrorBar(parsedData.error);
}

// Arduino Icon
function set_arduino_state() {
    $.get({
        url: "arduino-cmds/php/is_arduino_connected.php",
        success: function (data) {
            let result = $.parseJSON(data);
            set_arduino_state_class(result.response == true);
        }
    });
}

function set_arduino_state_class(is_connected) {
    if (is_connected)
        $arduinoIcon.addClass("connected");
    else
        $arduinoIcon.addClass("disconnected");
}


// Serial Icon
function set_serial_state() {
    $.get({
        url: "arduino-cmds/php/is_serial_running.php",
        success: function (data) {
            let result = $.parseJSON(data);
            set_serial_state_class(result.response == true);
        }
    });
}

function set_serial_state_class(is_connected) {
    if (is_connected) {
        $serialIcon.addClass("connected");
    } else {
        $serialIcon.addClass("disconnected");
        connect_to_serial();
    }

}

function connect_to_serial() {
    $.get({
        url: "arduino-cmds/php/start_serial.php",
        success: function (data) {
            console.log('connect_to_serial', data);
            set_serial_state();
        }
    });
}

// Add fn to jquery class
$.fn.extend({
    qcss: function (css) {
        return $(this).queue(function (next) {
            $(this).css(css);
            next();
        });
    }
});