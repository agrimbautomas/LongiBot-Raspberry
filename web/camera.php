<?php
require 'config.php';
?>
<div class="camera-container containers-frame-screen hidden-frame" id="camera-container">
    <iframe src="http://<?php echo RASPBERRY_IP; ?>/camera/web/"></iframe>
</div>