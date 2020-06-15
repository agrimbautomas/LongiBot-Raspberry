#!/bin/bash
if pgrep -f "read_temp_hum.py" > /dev/null 2>&1; then echo 1; else echo 0; fi;
