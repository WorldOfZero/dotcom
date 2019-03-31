docker build -t worldofzero-server .

docker run --rm -p 5001:80 --name woz-server -e YOUTUBE_API_KEY=THEAPIKEY worldofzero-server