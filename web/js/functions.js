$(document).ready(function () {

    $('#button1').click(function () {
        $.get("move_forward.php", function (data) {
            console.log(data);
            console.log("Load was performed.");
        });
    });

    $('#button2').click(function () {
        $.get("test.html", function (data) {
            console.log(data);
            console.log("Load was performed.");
        });
    });

});
