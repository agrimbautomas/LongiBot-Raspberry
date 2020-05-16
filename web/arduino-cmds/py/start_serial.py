import serial
import RPi.GPIO as GPIO
import time
from config import ACM_PORT 

ser=serial.Serial(ACM_PORT,9600)  #change ACM number as found from ls /dev/tty/ACM*
ser.baudrate=9600

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)

while True:
	read_ser=ser.readline()
	print(read_ser)
