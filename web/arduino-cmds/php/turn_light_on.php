<?php include 'config.php'; ?>
<?php
$host = get_current_user() != 'pi' ? 'ssh pi@' . $RASPBERRY_IP : '';
$file = $host . ':/home/pi/longibot-raspberry/web/arduino-cmds/sh/turn_light_on.sh';
$cmd = $host . ' bash /home/pi/longibot-raspberry/web/arduino-cmds/sh/turn_light_on.sh';
//if ( file_exists($file) )
$output = exec($cmd);
//$error = $output;

include '../../notifications.php';
