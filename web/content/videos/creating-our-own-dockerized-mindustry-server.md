---
title: "Creating our own Dockerized Mindustry Server"
aliases: [/v/m3mowhqXsXE/]
date: 2025-05-16
featured_image: https://i.ytimg.com/vi/m3mowhqXsXE/mqdefault.jpg
tags: [ java,containers ]

---

{{% youtube id="m3mowhqXsXE" %}}

Lately I've been playing Mindustry a factory based tower defense game that lets you build a factory, construct defenses and grow over time. Mindustry also includes its own self-hostable server. We're going to be taking a look at how we can use that self-hosted server file in order to create a reproducible containerized environment where we can run Mindustry games to play with friends.

To setup our Mindustry container image we're going to create a `Dockerfile` with three layers:

```docker
FROM openjdk:25-slim
COPY server.jar /server.jar
CMD [ "java", "-jar", "/server.jar" ]
```

* `FROM`: defines which image to base our own image upon. We'll be layering upon a slimmed down version of openjdk's images.
* `COPY`: copies a file from our local machine - `server.jar` in this case - onto the container image so we can access it.
* `CMD`: defines the command to run to boot our server when we run it. For us this means using the packaged `jre` to run the `server.jar` we copied over into the container.

We build our Docker Image using this command:

```sh
docker build --tag "mindustry-server" .
```

And then run that image using `docker run`:

```sh
docker run -it -p 6567:6567 -p 6567:6567/udp mindustry-server
```

Mindustry Server Hosting is documented on the Mindustry Wiki here: https://mindustrygame.github.io/wiki/servers/

We are basing our `Dockerfile` on the `openjdk` images. You can find them on Docker Hub here: https://hub.docker.com/_/openjdk

If you'd like to see how we can apply similar ideas to hosting our own Minecraft Server, you can check out our containerized Minecraft server here: https://youtu.be/JtKIpGjtLzw

The current version of this container is available on GitHub at https://github.com/WorldOfZero/mindustry-server

***

Mindustry is available on Itch or Steam for desktop players or you can get a copy for your mobile phones:

* Itch.io: https://anuke.itch.io/mindustry
* Steam: https://store.steampowered.com/app/1127400/Mindustry/
* Google Play Store (Android): https://play.google.com/store/apps/details?id=io.anuke.mindustry&pli=1
* Apple App Store (iOS): https://apps.apple.com/us/app/mindustry/id1385258906?ls=1

(I don't have any association with this game, I just like playing it)