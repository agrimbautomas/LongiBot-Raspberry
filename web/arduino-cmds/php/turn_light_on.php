<?php

$file = '/home/pi/longibot-raspberry/web/arduino-cmds/sh/turn_light_on.sh';
if ( file_exists($file) )
	$output = exec('bash /home/pi/longibot-raspberry/web/arduino-cmds/sh/turn_light_on.sh');
else
	$error = 'File doesnt exist';


echo "response:" . $output;

