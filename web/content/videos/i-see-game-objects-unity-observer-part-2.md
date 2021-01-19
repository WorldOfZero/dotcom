---
title: "I See Game Objects - Unity Observer - Part 2"
aliases: [/v/lELHSvmBCVw/]
date: 2018-05-03
featured_image: https://i.ytimg.com/vi/lELHSvmBCVw/mqdefault.jpg
tags: [ unity3d,tutorial,csharp,dotnet ]

---

{{% youtube id="lELHSvmBCVw" %}}

Time to make our Unity Observer a bit more... useful. Right now we have a custom Unity editor window that can find a game object by name and display its position in the scene. That's great, but lets take things a bit further than that.

To accomplish that we're going to be changing up our search. Instead of finding a single Game Object that matches a name we're going to find ALL game objects that contain our search term. The advantage of this is that now we are able to very easily find, for example, all Lights or Doors in our scene with a very simple search and identify where each of them are in the scene. Granted, we can still only find objects by their position still, but we're getting there.

In order to find Game Object's by name we will need to do some minor tinkering to get things working. We'll be using the Resources object to pull all GameObject resources from our game. The problem with this is that all Game Object's really does mean ALL Game Objects. We'll get the default Game Objects Unity builds and some scene helpers as well. We'll even pull in Game Objects from other scenes we haven't loaded yet. For our use we'll need to filter down to just the Game Object's inside of an active scene prior to applying our search filter. Once we have that moving our positioning code into a loop gives us a giant list of searchable Game Objects!

This addition already makes the tool pretty handy but there is still a lot we can do to make it better. What would you use this tool for? Are there features you'd like to see added?

Join the World of Zero Discord channel to talk about Games, your projects or other software development things: https://discord.gg/hU5Kq2u