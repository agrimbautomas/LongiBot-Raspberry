<?php
global $output;
global $error;

if ( isset($output) )
	echo '{"output": "' . $output . '"}';
elseif ( isset($error) )
	echo '{"error": "'. $error .'"}';