<?php
require '../../config.php';

$output = runArduinoShCmd('start_serial.sh');

include '../../notifications.php';
