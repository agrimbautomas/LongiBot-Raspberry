$(document).ready(function () {

    setupButton('#button1', 'arduino-cmds/php/turn_light_on.php');
    setupButton('#button2', 'arduino-cmds/php/test.php');

    function setupButton(selector, file) {
        $(selector).click(function () {
            $.get(file, function (data) {
                console.log(file, data);
            });
        });
    }

});
