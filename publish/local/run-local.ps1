# Copy the docker-compose file to the server, then run it
scp docker-compose.yml clouduser@192.168.1.58:/home/clouduser/worldofzero/docker-compose.yml
ssh clouduser@192.168.1.58 'docker-compose -f /home/clouduser/worldofzero/docker-compose.yml up -d'