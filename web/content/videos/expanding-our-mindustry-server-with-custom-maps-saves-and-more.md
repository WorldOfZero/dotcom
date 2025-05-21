---
title: "Expanding our Mindustry Server with Custom Maps, Saves and More"
aliases: [/v/9kenUFJqoVc/]
date: 2025-05-21
featured_image: https://i.ytimg.com/vi/9kenUFJqoVc/mqdefault.jpg
tags: [ containers,java ]

---

{{% youtube id="9kenUFJqoVc" %}}

Lets expand the dockerized Mindustry server we've been building by dynamically downloading the `server.jar` when we build our image and enabling custom maps, automatic hosting, persistent save files and more! We'll be taking a look at how we can use volumes to mount local directories in our container so we're able to add custom maps or access our servers config files locally. Then we'll look at using scripts that can automatically start our server using the custom map file we choose when starting our server.

Our expanded Dockerfile looks like this:

```dockerfile
FROM openjdk:25-slim
ARG MINDUSTRY_VERSION
ENV MINDUSTRY_VERSION=${MINDUSTRY_VERSION:-"v146"}
COPY run-server.sh /mindustry/run-server.sh
ADD https://github.com/Anuken/Mindustry/releases/download/$MINDUSTRY_VERSION/server-release.jar /mindustry/server.jar
CMD [ "sh", "/mindustry/run-server.sh" ]
```

`ADD` lets us add remote files to our container image, this means we can directly link to the github release binaries to add them to the image without having to download them to our computer first.

Our `run-server.sh` script hosts a random map or the map provided in the `MINDUSTRY_MAP` environment variable if you provide it.

```sh
if [ -z "${MINDUSTRY_MAP}" ]; then
    java -jar /mindustry/server.jar host
else
    java -jar /mindustry/server.jar host $MINDUSTRY_MAP
fi
```

Once we have created those two files, we are able to build our server using `docker build`:

```sh
docker build --tag "mindustry-server" --build-arg MINDUSTRY_VERSION="v146" .
```

This builds our `mindustry-server` image with the `MINDUSTRY_VERSION` version of Mindustry - in this case `v146`.

Once we have both of these scripts we can run our server using:

```sh
docker run -it -p 6567:6567 -p 6567:6567/udp -v ${pwd}/config:/config -v ${pwd}/maps:/config/maps -e MINDUSTRY_MAP="Veins" mindustry-server
```

This command runs a new `Veins` map including our maps and config settings for persistence using volumes.

***

Mindustry is available on Itch or Steam for desktop players or you can get a copy for your mobile phones:

* Itch.io: https://anuke.itch.io/mindustry
* Steam: https://store.steampowered.com/app/1127400/Mindustry/
* Google Play Store (Android): https://play.google.com/store/apps/details?id=io.anuke.mindustry&pli=1
* Apple App Store (iOS): https://apps.apple.com/us/app/mindustry/id1385258906?ls=1

(I don't have any association with this game, I just like playing it)

***

If you missed the first video in our Dockerized Mindustry Server, you can catch up here: https://youtu.be/m3mowhqXsXE