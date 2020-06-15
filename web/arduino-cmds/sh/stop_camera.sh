#!/bin/bash
rm /run/shm/hls/index.m3u8
ps -ef | grep start_camera.sh | grep -v grep | awk '{print $2}' | xargs kill
ps -ef | grep run/shm/hls | grep -v grep | awk '{print $2}' | xargs kill
