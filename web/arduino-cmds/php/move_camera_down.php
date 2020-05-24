<?php
require '../../config.php';

$output = runArduinoShCmd('move_camera_down.sh');

include '../../notifications.php';
