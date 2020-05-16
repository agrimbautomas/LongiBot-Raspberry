<?php
require '../../config.php';

$output = runArduinoShCmd('move_right.sh');

include '../../notifications.php';
