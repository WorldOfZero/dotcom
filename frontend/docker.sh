docker build -t worldofzero-frontend .

docker run --rm -p 8080:80 --name woz-frontend worldofzero-frontend