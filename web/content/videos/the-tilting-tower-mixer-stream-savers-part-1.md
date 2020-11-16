---
title: "The Tilting Tower - Mixer Stream Savers - Part 1"
alias: [/v/R-a1VYrrZP8/]
date: 2018-02-27
featured_image: https://i.ytimg.com/vi/R-a1VYrrZP8/mqdefault.jpg

---

{{% youtube id="R-a1VYrrZP8" %}}

We're returning to our Mixer game with a game plan this time. The goal is to build small games that can be used almost like an interactive screen saver when you need to AFK during a live stream. Ideally this helps keep people engaged and adds some excitement to a stream.

We're starting with an MVP, a basic balancing game where blocks are dropped onto a suspended balancing board. If the board falls over you lose. For now the focus is on determining defeat. You lose if the tower falls over so we'll need to check that, for our purposes we're calling it defeat if the platform falls below the middle of the pivot point and has flipped upside down.

To determine if we've fallen below the origin is fairly straight forward, but what about checking the angles? For that we're going to use the dot product which will compare two vectors and return the length of the vectors * the cosine of the angle between them. Since we're using normalized vectors for this we're left with just the cosine of the angle. This means that parallel vectors will have a result of 1, perpendicular vectors will result in 0 and parallel vectors in opposing directions will yield -1. If we plug the up vector of our platform and the global UP vector into this function we'll receive a value that will represent the platform being upside down when it becomes less than 0.

To finish things up we'll attach some Unity Events to the game over trigger so we can have other game objects in the scene subscribe to it and be notified when we lose. We'll use this later for triggering things like a game over screen and more.

The Mixer SDK is available from the Unity Asset store here and is free to use in your game: https://assetstore.unity.com/packages/tools/integration/mixer-sdk-beta-88585

You can learn more about integrating with Mixer on their developer portal here: https://dev.mixer.com

Other languages are supported as well if you'd like to integrate into other services including Java, Javascript and Python.

We have a Discord server for talking about your projects or other cool development things (both game dev and beyond!): https://discord.gg/hU5Kq2u