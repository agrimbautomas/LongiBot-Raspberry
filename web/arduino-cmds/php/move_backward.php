<?php
require '../../config.php';

$output = runArduinoShCmd('move_backward.sh');

include '../../notifications.php';
