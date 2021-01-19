---
title: "A Circle Shader in Shader Graph - Ripple in Shader Graph - Part 1"
aliases: [/v/R05OYXNDyas/]
date: 2018-10-11
featured_image: https://i.ytimg.com/vi/R05OYXNDyas/mqdefault.jpg
tags: [ unity3d,tutorial,shader ]

---

{{% youtube id="R05OYXNDyas" %}}

Lets learn Shader Graph by building our ripple shader entirely within Shader Graph.

The goal of this series is to reproduce the ripple shader we've been working on and compare/contrast the process of building the same shader in both tools that Unity makes available to you.

To get started with this version of the ripple shader we're going to introduce Shader Graph, get everything setup and start building our rings. The end goal is a shader that can color everything inside of the inside radius one color and color everything outside of the radius a second color. We'll use the world space position and Shader Graph's conditional node to build this and we'll also take some time to experiment with a few other options Shader Graph makes available.

I'm using this as a way to learn Shader Graph myself so there will be a number of mistakes, missteps and poor assumptions in this video and the rest of the series. Hopefully we can overcome some common problems together so you can avoid them in your own projects!

You'll need Unity 2018 and a project running the Lightweight Render Pipeline (LWRP) to be able to use Shader Graph and build this shader. If you are using an older version of Unity or have a project which isn't using the LWRP then you may want to consider watching the original Ripple Shader we built using Unity's Surface Shader language.

You can review what we're building in shader code to build the Ripple shader here: https://www.youtube.com/playlist?list=PLEwYhelKHmigqgiurk2lz6l8gRtVaL2zz

Come Join the World of Zero Discord server? We'd love to chat: https://discord.gg/hU5Kq2u