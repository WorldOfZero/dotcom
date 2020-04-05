#!/bin/sh

# time=$(date)
# echo "::set-output name=time::$time"

dotnet /app/generate-files-dotnet.dll -- --youtube-apikey=$1 --template=$2 --channel=$3 --output=$4