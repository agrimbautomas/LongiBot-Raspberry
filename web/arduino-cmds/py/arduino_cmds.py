#!/usr/bin/env python3
import serial; 

def write_in_serial(param):
    ser = serial.Serial('/dev/ttyACM0', 9600)
    ser.baudrate=9600

    ser.write(str.encode(param))
    print("write_in_serial(" + param + ") executed")