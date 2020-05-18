$(document).ready(function () {
    setupButton('#play-automatic-button', '../arduino-cmds/php/start_automatic.php', hidePlayButton());
    setupButton('#stop-automatic-button', '../arduino-cmds/php/stop.php', displayPlayButton());
});

function displayPlayButton() {
    $('#play-automatic-button').show();
}

function hidePlayButton() {
    $('#play-automatic-button').hide();
}