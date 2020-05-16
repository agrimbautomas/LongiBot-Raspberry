let $menuContainer;
let $joystickContainer;


$(document).ready(function () {
    setupContainers();
    setupScreenAnimations();
});

function setupContainers() {
    $menuContainer = $('#menu-container');
    $joystickContainer = $('#joystick-container');
}

function setupScreenAnimations() {
    $('#go-to-joystick').click(function () {
        switchScreen($menuContainer, $joystickContainer)
    })
}

function switchScreen($containerToHide, $containerToShow) {
    console.log('switchScreen');
}
