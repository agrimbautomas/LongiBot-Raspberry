#!/bin/bash
ps -ef | grep read_temp_hum.py | grep -v grep | awk '{print $2}' | xargs kill


