#!/usr/bin/env python3
import serial;
import ACM_PORT from config

def write_in_serial(param):
    ser = serial.Serial(ACM_PORT, 9600)
    ser.baudrate=9600

    ser.write(str.encode(param))
    print("write_in_serial(" + param + ") executed")