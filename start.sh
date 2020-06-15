#!/bin/bash

# Start serial
sh /home/pi/longibot-raspberry/web/arduino-cmds/sh/start_serial.sh

# Process to update the temperature and humidity
nohup python3 /home/pi/longibot-raspberry/web/arduino-cmds/py/read_temp_hum.py -s > /dev/null 2>&1 &

# Start camera
nohup sh /home/pi/longibot-raspberry/picam/start_camera.sh > /dev/null 2>&1 &

