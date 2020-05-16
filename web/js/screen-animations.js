let $menuContainer;
let $joystickContainer;
let $debuggerContainer;
let $backButton;
let ANIMATION_SPEED = 400;

$(document).ready(function () {
    setupContainers();
    setupScreenAnimations();
});

function setupContainers() {
    $menuContainer = $('#menu-container');
    $joystickContainer = $('#joystick-container');
    $debuggerContainer = $('#debugger-container');
    $backButton = $('header .back-button');
}

function setupScreenAnimations() {
    $('#go-to-joystick').click(function () {
        switchScreen($joystickContainer, 'fromRight');
        showBackButton();
    });

    $('#go-to-debugger').click(function () {
        switchScreen($debuggerContainer, 'fromBottom')
        showBackButton();
    });

    $('#go-to-menu').click(function () {
        switchScreen($menuContainer, 'fromLeft')
        hideBackButton();
    });
}

function switchScreen($containerToShow, animation = 'fromBottom') {
    let $activeContainer = $('.active-container');

    if (animation === 'fromBottom')
        displayFromBottom($activeContainer, $containerToShow);

    if (animation === 'fromRight')
        displayFromRight($activeContainer, $containerToShow);

    if (animation === 'fromLeft')
        displayFromLeft($activeContainer, $containerToShow);
}

/*****************************************/
/************** BACK BUTTON **************/

/*****************************************/

function showBackButton() {
    $backButton.css('opacity', '1');
}

function hideBackButton() {
    $backButton.css('opacity', '0');
}

/*****************************************/
/************** TRANSITIONS **************/

/*****************************************/
function displayFromBottom($containerToHide, $containerToShow) {
    $containerToHide
        .animate({
            top: '-110%'
        }, ANIMATION_SPEED)
        .removeClass('active-container');

    $containerToShow
        .css({
            top: '110%',
            left: '0%'
        })
        .removeClass('hidden-frame')
        .addClass('active-container')
        .animate({
            top: '0%'
        }, ANIMATION_SPEED);
}

function displayFromRight($containerToHide, $containerToShow) {
    $containerToHide
        .animate({
            left: '-110%'
        }, ANIMATION_SPEED)
        .removeClass('active-container');

    $containerToShow
        .css({
            left: '110%',
            top: '0%'
        })
        .removeClass('hidden-frame')
        .addClass('active-container')
        .animate({
            left: '0%'
        }, ANIMATION_SPEED);
}

function displayFromLeft($containerToHide, $containerToShow) {
    $containerToHide
        .animate({
            left: '110%'
        }, ANIMATION_SPEED)
        .removeClass('active-container');

    $containerToShow
        .css({
            left: '-110%',
            top: '0%'
        })
        .removeClass('hidden-frame')
        .addClass('active-container')
        .animate({
            left: '0%'
        }, ANIMATION_SPEED);
}

