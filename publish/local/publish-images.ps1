# 192.168.1.58:5000 is the link to a local Docker Repository
# That repository was configured with: https://github.com/docker/docker.github.io/blob/master/registry/deploying.md
docker build -t 192.168.1.58:5000/woz-server:latest ../../backend/youtube-service
docker build -t 192.168.1.58:5000/woz-frontend:latest ../../frontend
docker build -t 192.168.1.58:5000/woz-proxy:latest ../../backend/proxy

docker push 192.168.1.58:5000/woz-server:latest
docker push 192.168.1.58:5000/woz-frontend:latest
docker push 192.168.1.58:5000/woz-proxy:latest