<?php
global $output;
global $error;

if ( !is_null($output) )
	echo "response:" . $output;
elseif ( !is_null($error) )
	echo "Error:" . $error;