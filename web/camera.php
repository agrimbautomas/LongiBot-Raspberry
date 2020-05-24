<?php
require 'config.php';
?>
<div class="camera-container containers-frame-screen hidden-frame" id="camera-container">
    <iframe src="http://<?php echo RASPBERRY_IP; ?>/camera/web/"></iframe>
    <div class="camera-servo-buttons">
        <i class="fas fa-arrow-up" id="camera-servo-move-up"></i>
        <i class="fas fa-arrow-down" id="camera-servo-move-down"></i>
    </div>
</div>