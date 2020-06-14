# Add vim styles
sudo cp /home/pi/longibot-raspberry/config/.vimrc /root/

# Install apache2 and vim
sudo apt update
sudo apt install nginx vim -y

# Install php for the local weh
sudo apt install php libapache2-mod-php -y
sudo apt install php-fpm -y

# Add default nginx config
sudo cp /home/pi/longibot-raspberry/config/default-nginx /etc/nginx/sites-available/default

# Start Nginx
sudo /etc/init.d/nginx restart

# Add apache2 user to group to dialout group
sudo usermod -a -G dialout www-data
# if doesnt work try adding it to root group
# sudo usermod -a -G root www-data

# Change permisson for nginx
sudo usermod -a -G pi www-data
