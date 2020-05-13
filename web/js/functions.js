let $headerNotificationBar;

$(document).ready(function () {

    $headerNotificationBar = $('.error-bar');

    setupButton('#button1', 'arduino-cmds/php/turn_light_on.php');
    setupButton('#button2', 'arduino-cmds/php/test.php');

    function setupButton(selector, file) {
        $(selector).click(function () {
            $.get(file, function (data) {
                setupErrorBar("Some some");
                console.log("From file: " + file, "data: " + data);
            });
        });
    }

    function setupErrorBar(message) {
        $headerNotificationBar.children('span').text(message);
        $headerNotificationBar.qcss({'top': 0}).delay(3000).qcss({'top': -60});
    }
});

$.fn.extend({
    qcss: function (css) {
        return $(this).queue(function (next) {
            $(this).css(css);
            next();
        });
    }
});