<?php
global $output;
global $error;

if ( isset($output) )
	echo '{"error": "' . $output . '"}';
elseif ( isset($error) )
	echo '{"error": "'. $error .'" }';