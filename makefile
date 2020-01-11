DOTCOM_DIR = "./web"
VIDEO_CONTENT_OUT_DIR = "./web/content/videos"

generate-videos:
	echo "Downloading video content..."
	echo "Converting videos to Markdown..."
	echo "Downloaded and Processed X videos"
	echo ${VIDEO_CONTENT_OUT_DIR}

run: # Setup a developer version of the website
	hugo server --buildFuture --source ${DOTCOM_DIR}

build: generate-videos
	hugo --minify --source ${DOTCOM_DIR}