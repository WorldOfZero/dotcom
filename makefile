DOTCOM_DIR = "./web"
GENERATE_VIDEO = "./tools/generate-video"
GENERATE_VIDEO_FILE = "generate_video.py"
VIDEO_CONTENT_OUT_DIR = "./web/content/videos"
VIDEO_TEMPLATE = "./tools/generate-video/video.md.template"
TAG_REFERENCE_FILE = "./tags.yaml"
CHANNEL_ID = "UUJKLCjeujQj-d3JjsbVtkJw"

# Run video generation
generate-videos:
	dotnet run --project .\actions\generator\generate-files-dotnet\ -- --tags=./tags.yaml --youtube-apikey=${YOUTUBE_API_KEY} --channel=${CHANNEL_ID} --output=./web/content/videos --template=./actions/generator/generate-files-dotnet/video.md.template

# Build optimized site
build: generate-videos
	hugo --minify --source ${DOTCOM_DIR}

# Setup a developer version of the website
dev: 
	hugo server --buildFuture --source ${DOTCOM_DIR}

# Run all tests and validation
# test: test-generate-videos