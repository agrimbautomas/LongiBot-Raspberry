import serial
from config import ACM_PORT 
from logs import iflan_log, save_by_type

ser=serial.Serial(ACM_PORT,9600)  #change ACM number as found from ls /dev/tty/ACM*
ser.baudrate=9600

while True:
	if ser.in_waiting > 0:
		response = ser.readline().decode('utf-8').rstrip()
		iflan_log(response)
		save_by_type(response)



