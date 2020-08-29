<?php

define('RASPBERRY_IP', $_SERVER['SERVER_ADDR'] === "::1" ? '192.168.0.13' : $_SERVER['SERVER_ADDR'] );
define('HOST', get_current_user() != 'pi' ? 'ssh pi@' . RASPBERRY_IP : "");
define('ARDUINO_SH__PATH', '/home/pi/longibot-raspberry/web/arduino-cmds/sh/');

function runArduinoShCmd($fileName){
	$filePath = ARDUINO_SH__PATH . $fileName;
	$cmd = HOST . " bash $filePath";
	return exec($cmd);
}