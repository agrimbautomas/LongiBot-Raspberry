<?php require 'header.php'; ?>
    <div class="log-container"></div>
    <script>
        $(document).ready(function () {
            var time = 0;
            setInterval(function () {
                $.ajax({
                    type: "POST",
                    data: {time: time},
                    url: "helpers/read_log_file.php",
                    success: function (data) {
                        var result = $.parseJSON(data);
                        if (result.content)
                            $('.log-container').append('<br>' + result.content.replace(/\n/g, "<br />"));

                        time = result.time;
                    }
                });
            }, 1000);
        });
    </script>
<?php require 'footer.php'; ?>