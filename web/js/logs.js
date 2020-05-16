$(document).ready(function () {
    readLogs();
});

function readLogs() {
    var time = 0;
    setInterval(function () {
        $.post({
            data: {time: time},
            url: "helpers/read_log_file.php",
            success: function (data) {
                var result = $.parseJSON(data);
                if (result.content)
                    $('.log-container').html(result.content.replace(/\n/g, "<br />"));

                time = result.time;
            }
        });
    }, 1000);
}