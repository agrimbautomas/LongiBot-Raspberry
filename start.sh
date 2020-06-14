#!/bin/bash

# Start serial
cd /home/pi/longibot-raspberry/web/arduino-cmds/sh && sh start_serial.sh

# Start camera
sh /home/pi/longibot-raspberry/picam/start_camera.sh
