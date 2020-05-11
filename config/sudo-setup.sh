# Install vim
sudo apt install vim

# Add vim styles
sudo cp /home/pi/longibot-raspberry/config/.vimrc /root/

# Install apache2
sudo apt update
sudo apt install apache2 -y

# Install php
sudo apt install php libapache2-mod-php -y

# Add apache confi to run from pi dir
sudo cat /home/pi/longibot-raspberry/config/apache-custom.txt >> /etc/apache2/apache2.conf

# Add apache2 user to group to dialout group
sudo usermod -a -G dialout www-data
# if doesnt work try adding it to root group
# sudo usermod -a -G root www-data


