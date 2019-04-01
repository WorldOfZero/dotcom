docker build -t worldofzero-proxy .

docker run --rm -p 8080:8080 --name woz-proxy worldofzero-proxy