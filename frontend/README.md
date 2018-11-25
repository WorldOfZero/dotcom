# World of Zero Frontend

This is the frontend server and client for WorldOfZero.com

Still very much a work in progress.

## Developing

### Setup

[Node](nodejs.org/en/download/) is required.

`npm install`

### Dev Server

`npm run dev`

The dev server has hot reloading. Any changes to the package.json or site will be detected and reloaded in your browser.

## Building Manually

### Locally

```bash
npm run build
npm run start
```

### Containerized

```bash
docker build -t woz-frontend:dev .
docker run -p 3000:8080 -n woz-frontend woz-frontend:dev
```

Builds a docker image and tags it for development. Also starts and exposes the server on port 8080.