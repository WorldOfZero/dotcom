DOTCOM_DIR = "./web"
GENERATE_VIDEO = "./tools/generate-video"
GENERATE_VIDEO_FILE = "generate_video.py"
VIDEO_CONTENT_OUT_DIR = "./web/content/videos"
VIDEO_TEMPLATE = "./tools/generate-video/video.md.template"
TAG_REFERENCE_FILE = "./tags.yaml"
CHANNEL_ID = "UUJKLCjeujQj-d3JjsbVtkJw"

# Run video generation
generate-videos:
	py ${GENERATE_VIDEO}/${GENERATE_VIDEO_FILE} --output ${VIDEO_CONTENT_OUT_DIR} --template ${VIDEO_TEMPLATE} --tagfile ${TAG_REFERENCE_FILE} --channel ${CHANNEL_ID}

init-generate-videos:
	pip install -r ${GENERATE_VIDEO}/requirements.txt

# Build optimized site
build: generate-videos
	hugo --minify --source ${DOTCOM_DIR}

# Setup a developer version of the website
dev: 
	hugo server --buildFuture --source ${DOTCOM_DIR}

# Run all tests and validation
# test: test-generate-videos