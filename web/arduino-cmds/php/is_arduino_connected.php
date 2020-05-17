<?php
require '../../config.php';

$output = runArduinoShCmd('is_arduino_connected.sh');

include '../../notifications.php';
