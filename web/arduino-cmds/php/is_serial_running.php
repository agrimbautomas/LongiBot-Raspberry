<?php
require '../../config.php';

$output = runArduinoShCmd('is_serial_running.sh');

include '../../notifications.php';
