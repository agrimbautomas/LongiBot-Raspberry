#!/usr/bin/env python3
import serial
from config import ACM_PORT
from logs import iflan_log

ser=serial.Serial(ACM_PORT,9600)  #change ACM number as found from ls /dev/tty/ACM*
ser.baudrate=9600

while True:
	if ser.in_waiting > 0:
        	line = ser.readline().decode('utf-8').rstrip()
        	print(line)
