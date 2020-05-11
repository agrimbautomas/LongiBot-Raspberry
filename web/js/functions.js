$(document).ready(function () {

    $('#button1').click(function () {
        $.get("move_forward.php", function (data) {
            console.log(data);
        });
    });

    $('#button2').click(function () {
        $.get("test.html", function (data) {
            console.log(data);
        });
    });

});
