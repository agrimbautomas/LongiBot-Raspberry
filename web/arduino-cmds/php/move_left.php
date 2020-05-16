<?php
require '../../config.php';

$output = runArduinoShCmd('move_left.sh');

include '../../notifications.php';
