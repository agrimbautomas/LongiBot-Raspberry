let $headerNotificationBar;

$(document).ready(function () {
    setupVars();

    setupButton('#button1', 'arduino-cmds/php/turn_light_on.php');
    setupButton('#button2', 'arduino-cmds/php/test.php');
});

function setupVars() {
    $headerNotificationBar = $('.error-bar');
}

function setupButton(selector, file) {
    $(selector).click(function () {
        $.get(file, function (data) {
            console.log(data);
            displayResponse(data)
        });
    });
}

function setupErrorBar(message) {
    $headerNotificationBar.children('span').text(message);
    $headerNotificationBar.qcss({'top': 0}).delay(3000).qcss({'top': -60});
}

function displayResponse(data) {
    const parsedData = JSON.parse(data);
    if (parsedData.error !== undefined)
        setupErrorBar(parsedData.error);
}

$.fn.extend({
    qcss: function (css) {
        return $(this).queue(function (next) {
            $(this).css(css);
            next();
        });
    }
});