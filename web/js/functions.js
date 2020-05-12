$(document).ready(function () {

    $('#button1').click(function () {
        $.get("arduino-cmds/move_forward.php", function (data) {
            console.log(data);
            console.log("Load was performed.");
        });
    });

    $('#button2').click(function () {
        $.get("arduino-cmds/test.html", function (data) {
            console.log(data);
            console.log("Load was performed.");
        });
    });

});
