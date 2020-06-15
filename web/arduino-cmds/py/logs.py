import logging
import datetime
import os
import json

# logging  
LOG = "../../logs/iflan.log"
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
    print(response)
    print(type(response)
	print(json.loads(response))
	print(parsed_response['temp/hum'])



