---
title: "The Search for Objects - Unity Observer - Part 1"
aliases: [/v/MxXRv8BaVpc/]
date: 2018-05-03
featured_image: https://i.ytimg.com/vi/MxXRv8BaVpc/mqdefault.jpg
tags: [ unity3d,csharp,dotnet ]

---

{{% youtube id="MxXRv8BaVpc" %}}

Lets make Observer an extension to the Unity Game Engine that makes it easier to inspect objects in your scene. In this video we'll build on the basic Editor Window we built from Part 0, all you need to get started is an empty Editor Window (start by building your own or check out my video on building on here: https://youtu.be/AMbz_kOwQu0). From there we'll add a field we can search with, write a function that can search for GameObject's by name and then display an editable position variable for them.

For searching GameObject's we can use the `GameObject.Find()` function. This searches the current scene for any GameObject with the given name and returns the first one found (or null if no object with that name exists). Once we have completed our search we can either display an editor for the objects position or display a Help Box to let you know how to use the tool. By the end of this we'll be able to edit the found GameObject's position from within our own custom editor. Neat!

We still have a long way to go to make this useful but it's taking shape fairly quickly.

The World of Zero Discord Channel: https://discord.gg/hU5Kq2u