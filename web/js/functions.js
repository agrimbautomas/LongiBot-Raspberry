let $headerNotificationBar;
let $arduinoIcon;

$(document).ready(function () {
    $headerNotificationBar = $('.error-bar');
    $arduinoIcon = $('#arduino-icon');

    set_arduino_state();
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

function set_arduino_state() {
    if (is_arduino_connected())
        $arduinoIcon.addClass("connected");
    else
        $arduinoIcon.addClass("disconnected");
}

function is_arduino_connected() {
    $.get({
        url: "arduino-cmds/php/is_arduino_connected.php",
        success: function (data) {
            let result = $.parseJSON(data);
            return result.response == "1";
        }
    });
}

$.fn.extend({
    qcss: function (css) {
        return $(this).queue(function (next) {
            $(this).css(css);
            next();
        });
    }
});