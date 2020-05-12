<?php
#$file = '/home/pi/longibot-raspberry/write_line.py';
$output = exec('bash /home/pi/longibot-raspberry/web/arduino-cmds/write_line.sh');

echo "response:" . $output;
