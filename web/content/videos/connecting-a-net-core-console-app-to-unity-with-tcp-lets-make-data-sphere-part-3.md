---
title: "Connecting a .NET Core Console App to Unity with TCP - Lets Make Data Sphere - Part 3"
aliases: [/v/34_ExFKs_GY/]
date: 2016-12-29
featured_image: https://i.ytimg.com/vi/34_ExFKs_GY/mqdefault.jpg

---

{{% youtube id="34_ExFKs_GY" %}}

Time for the fun part! In this video we're going to create a very simple plugin in .NET Core that will allow us to send data directly to Unity using the TCP Client we created last video. Combined with a JSON Serializer and Parser we will be able to send data back and forth between our new plugin and Unity. The result of this is a simple console app that can create particles in our Unity project. While the actions of the plugin are simple it serves to show just what we can do with this system.

Now that the skeleton of our plugin is complete we can use it create more meaningful data representations. Importantly this means we'll be able to use the next video to hook in real data from another website and really get the ball rolling with our data visualization!

Grab the code on GitHub and make it your own! https://github.com/WorldOfZero/Data-Sphere

Apologies for the length of this video. It ran quite a bit longer than I had intended. More than twice the length of my intended video length.

Due to technical issues Part 4 is unlisted. You can view it here if severe audio desysnc issues don't dissuade you. In it we connect to a Twitter API and begin funneling real time twitter location informatuion to our project: https://youtu.be/EkeJ2trQPwg