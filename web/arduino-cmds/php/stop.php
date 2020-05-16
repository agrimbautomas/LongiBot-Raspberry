<?php
require '../../config.php';

$output = runArduinoShCmd('stop.sh');

include '../../notifications.php';
