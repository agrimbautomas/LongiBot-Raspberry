# Add vim styles
sudo cp /home/pi/longibot-raspberry/config/.vimrc /root/

# Install apache2 and vim
sudo apt update
sudo apt install nginx vim -y

# Start Nginx
sudo /etc/init.d/nginx start

# Add apache confi to run from pi dir
#sudo cat /home/pi/longibot-raspberry/config/apache-custom.txt >> /etc/apache2/apache2.conf

# Add apache2 user to group to dialout group
sudo usermod -a -G dialout www-data
# if doesnt work try adding it to root group
# sudo usermod -a -G root www-data

# Change permisson for nginx
sudo usermod -a -G pi www-data
