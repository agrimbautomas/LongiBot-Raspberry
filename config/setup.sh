#!/bin/bash

# Set git config
git config --global core.editor "vim"
git config --global user.email "agrimbautomas@gmail.com"
git config --global user.name "Tomas Agrimbau"

# Add vim config 
cp /home/pi/longibot-raspberry/config/.vimrc /home/pi/

# Change permisson for apache
sudo usermod -a -G pi www-data




