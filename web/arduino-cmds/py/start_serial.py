import serial
from config import ACM_PORT 
from logs import iflan_log

ser=serial.Serial(ACM_PORT,9600)  #change ACM number as found from ls /dev/tty/ACM*
ser.baudrate=9600

while True:
	read_ser=ser.readline()
	iflan_log(read_ser.decode("utf-8"))
