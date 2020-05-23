$(document).ready(function () {
    setupButton('#play-automatic-button', '../arduino-cmds/php/start_automatic.php', hidePlayButton);
    setupButton('#stop-automatic-button', '../arduino-cmds/php/stop.php', displayPlayButton);
});

function displayPlayButton() {
    $('#stop-automatic-button').hide();
    $('.running-message').hide();
    $('#play-automatic-button').show();
}
function hidePlayButton() {
    $('#stop-automatic-button').show();
    $('#play-automatic-button').hide();
    $('.running-message').show();
}