import logging
import datetime

# logging  
LOG = "../../logs/iflan.log"
logging.basicConfig(filename=LOG, filemode="w", level=logging.DEBUG)  

# console handler  
console = logging.StreamHandler()  
console.setLevel(logging.ERROR)  
logging.getLogger("").addHandler(console)

def iflan_log(message):
	now = datetime.datetime.now()
	parsed_datetime = now.strftime("%Y-%m-%d %H:%M:%S")
	logging.debug(parsed_datetime + ": " + message)
