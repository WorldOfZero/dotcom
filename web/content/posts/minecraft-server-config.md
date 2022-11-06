---
title: 'How I Setup My Containerized Minecraft Server'
date: 2021-1-25
draft: false
description: Font ligatures combine multiple characters into a single unique character. Some fonts provide ligatures specifically for software development.
tags:
- docker
- cloud
- tutorial
featured_image: "images/posts/tutorials/font-ligatures.png"
---

:toc:

## Services

### Minecraft

[`itzg/minecraft-server`](https://github.com/itzg/docker-minecraft-server)

### Bungeecord

[`itzg/docker-bungeecord`](https://github.com/itzg/docker-bungeecord)

### Prometheus

[`prom/prometheus`](https://hub.docker.com/r/prom/prometheus)

### Grafana

[`grafana/grafana`](https://hub.docker.com/r/grafana/grafana)

### MySQL

[`mysql`](https://hub.docker.com/_/mysql)

### Dynamic DNS

If you don't have a static IP on your server, configure a Dynamic DNS entry to route players to your server automatically without needing to know a changing IP address.

## Core Setup

## Building a Derivative Container

> If you intend to run a completely vanilla (no mods/datapacks) server then you can very likely skip this step.

In order to simplify server configuration and the installation of mods and datapacks I like to create a container built from the root `itzg/minecraft-server` container.

Here is an example of what this derivative container might look like:

```Docker
FROM itzg/minecraft-server:1.3.0

ENV VERSION='1.16.1'

# Configure Server with Default Values
# Note: Unique ENV's may be configured in the docker-compose.yml
#       instead of this Dockerfile
ENV   EULA='TRUE' \
      TYPE='SPIGOT' \
      ONLINE_MODE='FALSE' \
      MAX_PLAYERS=50 \
      MEMORY='2G'

RUN mkdir /data/world/; chown minecraft:minecraft /data/world/

# Install Datapacks
COPY --chown=minecraft:minecraft resources/world /data/world

# Install Plugins
COPY --chown=minecraft:minecraft resources/plugins /data/plugins

# Configure Spigot Server
# spigot.yml is documented at https://www.spigotmc.org/wiki/spigot-configuration
COPY --chown=minecraft:minecraft resources/spigot/spigot.yml /data/spigot.yml
```

> Note: `itzg/minecraft-server` runs Minecraft as the `minecraft` user. If you add files to the container make sure they are accessible by this user or you will see errors. This is why the `COPY` layers of the container above use `--chown=minecraft:minecraft`.

This container setup expects your directory structure to look like this:

```sh
├───Dockerfile
└───resources
    ├───plugins
    │   └───your installed plugins...
    ├───spigot
    │   └───spigot.yml
    └───world
        └───datapacks
            └───your installed datapacks...
```

## Adding a New Server World

## Recommended Mods

### Bungee Server Manager

Manages bungeecord servers allowing you to add, edit and remove servers in realtime.

### Luck Perms

Manages permissions for users across all your servers.

## Metrics

todo: grafana/prometheus setup

### Setup Metrics

### Consuming Metrics

### Prometheus Exporter Mod

## Troubleshooting

TODO

## References

- [itzg/minecraft-server Docker Image](https://github.com/itzg/docker-minecraft-server)
- [Vanilla Tweaks Datapacks](https://vanillatweaks.net/picker/datapacks/)
- [Spigot MC Server](https://www.spigotmc.org/)