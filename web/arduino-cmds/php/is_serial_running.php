<?php
require '../../config.php';

$output = runArduinoShCmd('is_serial_sunning.sh');

include '../../notifications.php';
