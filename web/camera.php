<?php
require 'config.php';
?>
<div class="camera-container containers-frame-screen hidden-frame" id="camera-container">
    <!-- HTML -->
    <video id='raspi-cam'  class="video-js vjs-default-skin" width="400" height="300" controls>
        <source type="application/x-mpegURL" src="http://<?php echo RASPBERRY_IP; ?>/hls/index.m3u8">
    </video>

    <div class="camera-servo-buttons">
        <i class="fas fa-arrow-up" id="camera-servo-move-up"></i>
        <i class="fas fa-arrow-down" id="camera-servo-move-down"></i>
    </div>
</div>