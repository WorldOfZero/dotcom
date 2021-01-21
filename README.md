# World of Zero .COM

[![Netlify Status](https://api.netlify.com/api/v1/badges/12203603-6aef-4169-a1f2-066fd72f654f/deploy-status)](https://app.netlify.com/sites/worldofzero/deploys)

[![Generate Content [YouTube]](https://github.com/WorldOfZero/dotcom/workflows/Generate%20Content%20%5BYouTube%5D/badge.svg)](https://github.com/WorldOfZero/dotcom/actions)

## Building

### Publishing

Publish the website with Hugo using `hugo --minify --source ./web`. Currently the project uses [Netlify](https://netlify.com) to host worldofzero.com.

When run locally, published files may be found in the generated `public` directory.

### Running a Local Development Site

You may start a local development environment by running `hugo server --buildFuture --source ./web`. This will watch the `./web` directory for new content and automatically regenerate webpage source files if changes are detected.

If you have Make available you may also use `make dev` to start the local dev environment.

### Generating Video Content

To generate videos run the generate-files-dotnet app. You will need to provide two environment variables:

* `CHANNEL_ID`: This is the ID of the YouTube channel to retrieve content from. World of Zero's Channel ID is `UCJKLCjeujQj-d3JjsbVtkJw`.
* `YOUTUBE_API_KEY`: You will need a valid YouTube API Key to interact with the YouTube API. This key may be created in the [Google Developer Console](https://console.developers.google.com/).

```sh
dotnet run --project actions/generator/generate-files-dotnet -- --youtube-apikey=$env:YOUTUBE_API_KEY --channel=$env:CHANNEL_ID --output=./web/content/videos --template=./actions/generator/generate-files-dotnet/video.md.template --tags=./tags.yaml
```

You may get help with the file generation project by running:

```
dotnet run --project actions/generator/generate-files-dotnet -- --help
```

#### Automation

The process of generating videos is automated and you do not need to rerun the commands manually to get new content. A [periodic cron job is scheduled in GitHub Actions](./.github/workflows/automated-video-pages.yml) that automatically reruns this file generation project and opens a Pull Request against the repository if any changes are made (new videos published, description/titles updated).

> Note: Description changes will modify the generated file name which could result in duplicate published files. These currently require manual action to address.
