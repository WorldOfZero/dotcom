---
title: 'Docker: Running a Container with docker run'
date: 2026-11-18
draft: false
description: Helpful docker flags to more quickly launch and run a quick container.
tags:
- containers
- shell
- tip
- tutorial
---

`docker run` starts a container from an image. A handful of flags cover most day-to-day use. This example serves the current folder with nginx, so you can open it at `http://localhost:8080`:

```sh
docker run --rm -it -p 8080:80 -v ${PWD}:/usr/share/nginx/html nginx
```

`${PWD}` is the current directory in bash and PowerShell. In a Windows command prompt use `%cd%` instead. The cheat sheet below breaks down each part.
