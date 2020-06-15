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

# Change permisson for nginx
sudo usermod -a -G pi www-data

# Create startup script
sudo cp iflan-config /etc/init.d/iflan
sudo chmod +x /etc/init.d/iflan
sudo update-rc.d iflan defaults
