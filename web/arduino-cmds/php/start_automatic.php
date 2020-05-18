<?php
require '../../config.php';

$output = runArduinoShCmd('start_automatic.sh');

include '../../notifications.php';
