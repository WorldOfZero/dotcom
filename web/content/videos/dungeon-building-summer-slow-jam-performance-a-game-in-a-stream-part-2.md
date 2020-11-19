---
title: "Dungeon Building  - Summer Slow Jam - Performance, A Game In A Stream - Part 2"
aliases: [/v/t0yf7cRDdkw/]
date: 2017-07-19
featured_image: https://i.ytimg.com/vi/t0yf7cRDdkw/mqdefault.jpg

---

{{% youtube id="t0yf7cRDdkw" %}}

We are making a top down shooter. That's cool right? But wait there is more!

This isn't just any top down shooter, this game isn't even played on your computer! Instead a "Host" streams the game to Mixer, a realtime live streaming platform. This causes only minimal lag between the player and the host broadcasting the game (~200ms).

Next we'll incorporate interactive elements that the players watching can use. Only a limited number of people can play at one time and it's up to the stream viewers to eliminate the current players so they can play. Once you die you are rotated back into the queue and get to try to eliminate the latest player. Think of it like a global hotseat game that can be played from anywhere on anything!

Granted, this all assumes that the systems work. Which the probably won't. But hey, at least we're trying.

Information about the Summer Slow Jam can be found here: http://jams.gamejolt.io/SSJperformance

The triplanar shader we created during this stream can be found here: https://gist.github.com/runewake2/2ffbf5a6f6a7298c8013ed5ecea54d9b

Special Thanks to wowatomica for the idea of building a simple infinite dungeon using Perlin Noise!