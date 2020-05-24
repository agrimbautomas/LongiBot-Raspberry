<?php
require '../../config.php';

$output = runArduinoShCmd('move_camera_up.sh');

include '../../notifications.php';
