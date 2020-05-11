<?php
$file = '/home/pi/longibot-raspberry/write_line.py';
$output = exec('bash /home/pi/longibot-raspberry/web/run.sh');

echo "response:" . $output;