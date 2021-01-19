---
title: "An Instanced Line of Asteroids - Lets Make an Asteroid Belt - Part 4"
aliases: [/v/rUkwvUujL0w/]
date: 2017-02-21
featured_image: https://i.ytimg.com/vi/rUkwvUujL0w/mqdefault.jpg
tags: [ unity3d,csharp,dotnet ]

---

{{% youtube id="rUkwvUujL0w" %}}

We've already built an asteroid ring shader to handle rendering the rings of a planet at large distances. What about close distances though? For that we're going to want actual rocks! This is going to require us to figure out a way to render thousands of actual asteroid models around our player. To accomplish that we're going to use Instancing. This will require us to write scripts to draw our models using the provided Unity Graphics.DrawMeshInstanced() method. Next we'll need to build a quick Instanced Surface Shader, we can't use normal shaders here, they MUST be built for instancing. For this we'll just use the default created by Unity when we create a new Instanced Surface Shader.

Instanced rendering is a fantastic way to avoid additional draw calls when you are rendering a number of similar objects. In our case this means we can render millions of triangles and thousands of asteroids while still getting a framerate over 100 fps.

You can read more about Instancing in Unity here: https://docs.unity3d.com/540/Documentation/Manual/GPUInstancing.html

Quick note: had some recording troubles with the next few episodes. There will be a jump between this and the next episode. Sorry.