---
title: "Running a Minecraft Server in Docker"
aliases: [/v/JtKIpGjtLzw/]
date: 2019-03-12
featured_image: https://i.ytimg.com/vi/JtKIpGjtLzw/mqdefault.jpg

---

{{% youtube id="JtKIpGjtLzw" %}}

There are a number of ways to setup and run a Minecraft server (or any server for that matter). Docker is one of them. 

Docker is a container platform that is extremely popular throughout the software engineering industry for making server applications easy to build, configure, run and move around inside an environment. It helps define a specification or Image that can contains the entire running environment for your application and creates a set of boundaries around that environment so outside programs won't effect it and so your program won't effect others. This isolation helps create reproducible results.

In the case of Minecraft, using Docker enables us to avoid our server and local minecraft instance having conflicting configurations (for example testing out a beta or mod) but also provides a way for our server to be reproducible. This reproducibility is extremely handy because it means we can develop our server on our own PC and then move that server to any other place (the cloud, another PC etc) and get the same results. This makes testing new things really easy, but also makes it really easy to move to host on a local server or in the cloud on any number of providers. In my case the server is tested locally and iterated upon and then moved to a stand-alone server to run the production version of the Minecraft server.

In order to preserve the data of our server outside of the container we'll want to create a Docker Volume (https://docs.docker.com/storage/volumes/). Volumes provide a way to link your operating systems storage and the virtual storage occurring inside of the Docker container. Without this the data is not easily visible outside of docker. The advantage to this is it ensures that accidentally deleting or simply losing our server image does not result in the loss of players data. Docker components are designed to be easily created and destroyed, they are not for storing persistent state by default. Volumes provide a way around this and make preserving your important information possible.

The `itzg/minecraft-server` image is available here with more documentation and instructions: https://hub.docker.com/r/itzg/minecraft-server

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u