# 192.168.1.58:5000 is the link to a local Docker Repository
# That repository was configured with: https://github.com/docker/docker.github.io/blob/master/registry/deploying.md
docker build -t worldofzero.azurecr.io/woz-youtube-service:latest ../../backend/youtube-service
docker build -t worldofzero.azurecr.io/woz-frontend:latest ../../frontend
docker build -t worldofzero.azurecr.io/woz-proxy:latest ../../backend/proxy

docker push worldofzero.azurecr.io/woz-youtube-service:latest
docker push worldofzero.azurecr.io/woz-frontend:latest
docker push worldofzero.azurecr.io/woz-proxy:latest