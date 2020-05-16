<?php
require '../../config.php';

$output = runArduinoShCmd('turn_light_on.sh');

include '../../notifications.php';
