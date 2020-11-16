---
title: "Building OBS Overlay's in Unity 3D"
alias: ["/v/940uUL0Nvwc"]
date: 2020-04-28
featured_image: https://i.ytimg.com/vi/940uUL0Nvwc/mqdefault.jpg

---

{{% youtube id="940uUL0Nvwc" %}}

OBS (Open Broadcasting Software) is a tool for recording your screen and other sources to create lets plays, live streams and more. It works by combining a number of different "sources" into a "scene". These sources can be cameras, applications, desktop screens or web pages. In this example we'll integrate Unity into OBS through Unity's HTML5 Web GL support. This will enable us to render our Unity scene's into a webpage and then embed that webpage directly into OBS. Once there the full support of OBS becomes available including moving the object within the scene and applying Audio and Effect Filters. We'll use these filters to greenscreen our Unity scene, allowing us to completely remove the background from our render.

This is only a basic demonstration of what is required to do this so we'll be rendering a set of spinning cubes. However, we could take this example much further and embed full games or dynamically scripted events into the game.

There are a number of other ways to accomplish this, the simplest solution is basic Javascript, but those require a lot of work. The example we've written here required me to write 2 lines of code total!

This should also apply to other Game Engines that can render to HTML 5 canvases like [Game Maker](https://www.yoyogames.com/gamemaker) or [Construct](https://www.construct.net/en/make-games/games-editor) as two examples.

My twitch streams are at https://www.twitch.tv/worldofzerodev

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u