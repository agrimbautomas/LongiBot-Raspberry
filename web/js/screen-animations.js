let $menuContainer;
let $joystickContainer;

let ANIMATION_SPEED = 400;

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
        switchScreen($menuContainer, $joystickContainer,  'fromRight')
    })
}

function switchScreen($containerToHide, $containerToShow, animation = 'fromBottom') {
    console.log(animation);
    if (animation === 'fromBottom')
        displayFromBottom($containerToHide, $containerToShow);

    if (animation === 'fromRight')
        displayFromRight($containerToHide, $containerToShow);
}

function displayFromBottom($containerToHide, $containerToShow) {
    $containerToHide.animate({
        top: '-110%'
    }, ANIMATION_SPEED);

    $containerToShow.css('top', '110%').removeClass('hidden-frame').animate({
        top: '0%'
    }, ANIMATION_SPEED);
}

function displayFromRight($containerToHide, $containerToShow) {
    $containerToHide.animate({
        left: '-110%'
    }, ANIMATION_SPEED);

    $containerToShow.css('left', '110%').removeClass('hidden-frame').animate({
        left: '0%'
    }, ANIMATION_SPEED);
}

window.addEventListener('popstate', function(event) {
    // The popstate event is fired each time when the current history entry changes.

    var r = confirm("You pressed a Back button! Are you sure?!");

    if (r == true) {
        // Call Back button programmatically as per user confirmation.
        history.back();
        // Uncomment below line to redirect to the previous page instead.
        // window.location = document.referrer // Note: IE11 is not supporting this.
    } else {
        // Stay on the current page.
        history.pushState(null, null, window.location.pathname);
    }

    history.pushState(null, null, window.location.pathname);

}, false);
