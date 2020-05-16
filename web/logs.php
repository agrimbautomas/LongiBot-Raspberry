<?php
require 'config.php';

$output = runArduinoShCmd('move_left.sh');

print_r($output);

//include '../../notifications.php';
