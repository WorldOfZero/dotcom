#!/bin/sh

# time=$(date)
# echo "::set-output name=time::$time"

./generate-files-dotnet --youtube-apikey=$1 --template=$2 --channel=$3 --output=$4