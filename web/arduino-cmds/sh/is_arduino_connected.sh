FILE=/dev/ttyACM0
if [ -f "$FILE" ]; then 
	echo 1; 
else 
	echo 0;
fi
