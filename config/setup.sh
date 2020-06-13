#!/bin/bash

# Set git config
git config --global core.editor "vim"
git config --global user.email "agrimbautomas@gmail.com"
git config --global user.name "Tomas Agrimbau"

# Add vim config 
cp /home/pi/longibot-raspberry/config/.vimrc /home/pi/

# Add Tom's Pub key
echo 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCpvqCVlktIndh/Ia2+d4Yormm4aI12hMI9ZySN6lV6pfjruJx+RTLDsp76XGWsJy5M1BCycpgNAcLlB+6L4mVrBGnaFGSaBmEYGjhLntetrlsdNNG54cad7jwFzffZ+Pn0RwHhsHaKrpAD+3UtqyeTOYwTLzadIwcQf2+uZramkjzNJvVi8P8UPnWsq+vi+pW9A352YcDEuVSnKpO2pFrHkVls1G3e/F4vrE2S1OaUwtco1wdSttI+p1wmvygcjQ7oGORmBj/o5ttRdOwqQlAlqf9fVVsdFv7uz8/EwgjoMIklu55qnfx6hKOIXOa1V9Kg0ygs1TzRXp6RsSH8J4YRlwCUwUtw2iSBlAWzlchnbdkhNDfj3N5uPKLCBOgZ2OOlRq6mEJsrEtPQ2lcatv5SomkO0uS109lcDsbPU98kP1sKZUGZwwejgxGylHjMcFmHWkIsgZqRHWIddtTy0tkdrSfuIZhKwMXFSPi3A2FCdmDfmL+2L0JRM7mnWJfcDHPP4KI7syU7eQVH58u5mjIcOG2KaOshqhzBkI4jA3RrKrZyOzOLttJ4CdQucsuXzPEmiZoyfRXZzxiVJR68CjU4NzjwPs0mM95PLp/yHPDpU1njKiyjqmV5AH0LqGgCPdpkJAqnoN6ZAp3T7D+oktjVv7zWzJIqj9KH14ey6kmrTw== tomas@amalgama.co' >> /home/pi/.ssh/authorized_keys



