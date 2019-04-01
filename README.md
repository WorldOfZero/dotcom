# World of Zero .COM

| Service | Build Status |
| ------- | ------------ |
| Frontend | [![Build status](https://worldofzero.visualstudio.com/WorldOfZeroDotCom/_apis/build/status/WorldOfZeroDotCom-CI)](https://worldofzero.visualstudio.com/WorldOfZeroDotCom/_build/latest?definitionId=5) |

## Building

Build all files locally via the included docker-compose or individually

To use Docker Compose first you must supply an environment variable for the compose file to use. This is a requirement of the backend in order for it to connect to YouTube's API.

This can be done on powershell like:

```ps1
$env:YOUTUBE_API_KEY = "THIS_IS_A_KEY"
```

Or on Linux with bash:

```bash
YOUTUBE_API_KEY="THIS_IS_A_KEY"
```

Once the variable is configured, in the same shell run

```bash
docker-compose up
```

This starts all 3 required services and networks them automatically. For development, including the `--build` flag will ensure changes trigger rebuilding of images.

> Docker Compose is not ideal for development (iteration is slow) so this isn't great for new feature work.