#!/bin/bash

# Stop serial
sh /home/pi/longibot-raspberry/web/arduino-cmds/sh/stop_serial.sh

# Stop camera
sh /home/pi/longibot-raspberry/web/arduino-cmds/sh/stop_camera.sh

# Stop temphum update
sh /home/pi/longibot-raspberry/web/arduino-cmds/sh/stop_temphum.sh
