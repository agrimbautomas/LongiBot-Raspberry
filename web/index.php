Longibottt

<?php 

echo 'some some';

$file = '/home/pi/longibot-raspberry/write_line.py';

exec('bash /home/pi/longibot-raspberry/web/run.sh');

if(file_exists($file)){
	
	ob_start();
	passthru('/usr/bin/python3.7 /home/pi/longibot-raspberry/write_line.py');
	$output = ob_get_clean(); 
        echo $output;
        var_dump($output);

	$command = escapeshellcmd('python3 write_line.py');
	$output = shell_exec($command);
        echo $output;
        var_dump($output);
	
	$command = escapeshellcmd('python3 /home/pi/longibot-raspberry/write_line.py');
	$output = shell_exec($command);
	echo $output;
	var_dump($output);
}

?>
