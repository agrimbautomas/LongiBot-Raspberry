<?php
require '../../config.php';

$output = runArduinoShCmd('move_forward.sh');

include '../../notifications.php';
