---
title: "An Evicting Player Cache with ASP.NET Core"
aliases: [/v/yK2y2dpvZpI/]
date: 2017-04-12
featured_image: https://i.ytimg.com/vi/yK2y2dpvZpI/mqdefault.jpg
tags: [ asp.net,dotnet ]

---

{{% youtube id="yK2y2dpvZpI" %}}

We've got a rough draft of how our Players are going to connect to our World Of Zero Arcade (Live Streamed Game project). We'll start with the Player Service, an ASP.NET Core website which works as a service to create and maintain a queue of players waiting to play the game.

We also need a way to retrieve the order of our players so our game can select a player to actually play with. There are a lot of optimizations we'll make here along the way and this certainly isn't done but I think it highlights the beginning of this service. We'll pick it up some more as interesting things come up.

The World of Zero Arcade is Open Source! Grab the code and spin up your own! https://github.com/WorldOfZero/Arcade

Want to learn more about some of the topics covered here?

Rest Controllers in ASP.NET are created every time the endpoint is invoked. This is described in a lot more detail on this StackOverflow post: http://stackoverflow.com/questions/5425920/asp-net-mvc-is-controller-created-for-every-request

Static Constructors are fired the first time the object is created or accessed. Handy for initializing static things. Learn more about them here: https://msdn.microsoft.com/en-us/library/k9x6w0hc.aspx

Amortized Time Complexity is a measurement of the relative complexity of an algorithm. It helps us determine how much time or space will be consumed by the data structure or algorithm. https://en.wikipedia.org/wiki/Amortized_analysis