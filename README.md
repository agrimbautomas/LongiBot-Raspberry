# Change default password
passwd

# Run setup script
sudo sh config/sudo-setup.sh
sh config/setup.sh


###### Troobleshooting
### Changed your location ?
# Update local ip on web/config RASPBERRY_IP

### Audio not working ?
# Check if the card and devices are correctly setted up in picam/start_camera.sh
# To show current mic card and device run:
arecord -l

# Documentation on https://github.com/iizukanao/picam



