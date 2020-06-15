#!/bin/bash

# Start serial
cd /home/pi/longibot-raspberry/web/arduino-cmds/sh && sh start_serial.sh

# Process to update the temperature and humidity
python3 /home/pi/longibot-raspberry/web/arduino-cmds/py/read_temp_hum.py -s > /dev/null 2>&1

# Start camera
sh /home/pi/longibot-raspberry/picam/start_camera.sh
