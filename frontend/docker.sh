docker build -t worldofzero-frontend .

docker run --rm -p 8080:3000 --name woz-frontend worldofzero-frontend