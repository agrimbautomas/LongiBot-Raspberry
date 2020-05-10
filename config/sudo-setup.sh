# Install vim
sudo apt install vim

# Add vim styles
sudo cp /home/pi/longibot-raspberry/config/.vimrc /root/

# Add apache confi to run from pi dir
sudo cat /home/pi/longibot-raspberry/config/apache-custom.txt >> /etc/apache2/apache2.conf
