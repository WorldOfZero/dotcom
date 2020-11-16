---
title: "Building the Idea Wheel Prototype - OBS Overlay - From Live Stream"
alias: ["/v/CBNO-8OS3wU"]
date: 2020-06-11
featured_image: https://i.ytimg.com/vi/CBNO-8OS3wU/mqdefault.jpg

---

{{% youtube id="CBNO-8OS3wU" %}}

Recently in a live stream we built "The Topic Wheel"/"Idea Wheel" with the goal being to create an interactive element for a stream that could display any number of options and select one of them. This builds off of my recent experiments with [OBS Overlays in Unity](https://youtu.be/940uUL0Nvwc) except now we're going to be putting it into practice.

This is the full stream were we start with a new Unity project and build the full Overlay with the capability of displaying infinitely many options in a spinning wheel. There is still plenty we could do to improve this tool further but for an initial test it covers enough.

We also are able to explore how to do web requests in Unity (using Coroutines). This enables us to source our Topic Wheel's options from a text file. Typically this isn't very difficult, but because we're exporting an HTML5 application we'll actually need to make a request for a remote resource to grab the text file. In this case the file is located locally on my own computer, but this design also means that we could source text lists from any source we like. Potentially an option we could explore in the future.

Actually building this involved working with a few things I hadn't worked with previously and was a fun experiment. We were able to explore Coroutines slightly as well as dive a bit deeper into Unity UI and how to use it when building this project.

***

You can catch the Live Streams as they happen on Twitch at: twitch.tv/worldofzerodev

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u