import logging
import datetime
import os
import json

# logging  
LOGS_DIR = "/home/pi/longibot-raspberry/web/logs/"
LOG = LOGS_DIR + "iflan.log"
logging.basicConfig(filename=LOG, filemode="w", level=logging.DEBUG)  
FILE_MAX_SIZE= 1000

# console handler  
console = logging.StreamHandler()  
console.setLevel(logging.ERROR)  
logging.getLogger("").addHandler(console)

def iflan_log(message):
	now = datetime.datetime.now()
	parsed_datetime = now.strftime("%Y-%m-%d %H:%M:%S")
	logging.debug(parsed_datetime + ": " + message)
	#erase_if_heavy(LOG)

def erase_if_heavy(file_name):
	if(os.path.getsize(file_name) > FILE_MAX_SIZE):
		logging.debug(parsed_datetime + ": SIZE OVER LIMIT")
		open(file_name, 'w').close()
	else:
		logging.debug(parsed_datetime + ": 	NOMAL")

def save_by_type(response):
	try:
		parsed_response = json.loads(response)
		if "temp/hum" in parsed_response:
			write_into_file( "temp-hum.json" , response)
	except ValueError:
		print('Decoding JSON has failed for: ' + response)

def write_into_file(file_name, text):
	f = open(LOGS_DIR + file_name, "w")
	f.write(text)
	f.close()
	print(text)

