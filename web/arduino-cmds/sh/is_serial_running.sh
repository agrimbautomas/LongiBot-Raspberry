#!/bin/bash
if pgrep -f "start_serial.py" > /dev/null 2>&1; then echo 1; else echo 0; fi;
