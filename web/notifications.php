<?php
global $output;
global $error;

if ( isset($output) )
	echo "Response ===> " . $output;
elseif ( isset($error) )
	echo "Error ===>" . $error;