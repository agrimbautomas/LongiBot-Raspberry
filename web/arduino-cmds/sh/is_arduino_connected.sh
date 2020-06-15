FILE=/dev/ttyACM0
if [ -a "$FILE" ]; then
	echo 1; 
else 
	echo 0;
fi
