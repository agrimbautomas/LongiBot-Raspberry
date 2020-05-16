<?php include 'header.php'; ?>
<div class="buttons-container" id="menu-container">
    <div class="main-button blue-background">
        <div>
            Turn On Light
            <span>Prender luz</span>
            <i class="far fa-lightbulb"></i>
        </div>
    </div>

    <div class="main-button yellow-background">
        <div>
            Automatic
            <span>Longibot modo automatico</span>
            <i class="fas fa-robot"></i>
        </div>
    </div>

    <div class="main-button red-background" id="go-to-joystick">
        <div>
            Manual
            <span>Longibot modo manual</span>
            <i class="fas fa-mouse"></i>
        </div>
    </div>
</div>

<?php include 'joystick.php'; ?>

<?php include 'footer.php'; ?>
