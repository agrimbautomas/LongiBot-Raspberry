<?php
global $output;
global $error;

if ( isset($output) )
	echo '{"response": "' . $output . '"}';
elseif ( isset($error) )
	echo '{"error": "'. $error .'"}';