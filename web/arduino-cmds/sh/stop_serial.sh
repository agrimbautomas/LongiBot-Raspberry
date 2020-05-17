#!/bin/bash
ps -ef | grep start_serial.py | grep -v grep | awk '{print $2}' | xargs kill


