#!/bin/bash

# Stop serial
cd /home/pi/longibot-raspberry/web/arduino-cmds/sh && sh stop_serial.sh

# Start camera
sh /home/pi/longibot-raspberry/picam/start_camera.sh
