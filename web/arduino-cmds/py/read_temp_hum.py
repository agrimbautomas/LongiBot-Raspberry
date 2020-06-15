#!/usr/bin/env python3
SECONDS = 60.0

import time
starttime=time.time()
while True:
	exec(open('/home/pi/longibot-raspberry/web/arduino-cmds/py/request_temp_hum.py').read())
	time.sleep(SECONDS - ((time.time() - starttime) % SECONDS))

