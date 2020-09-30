---
title: "Distorting the Grass Renderer with a Directed Map"
date: 2017-06-13
featured_image: https://i.ytimg.com/vi/VZ-LYODBjgA/mqdefault.jpg

---

{{% youtube id="VZ-LYODBjgA" %}}

The first step in a longer process that ought to allow our grass to bend as players walk through, cars drive over etc. To mark those distortions or bending of our grass we'll implement a map using the points UV coordinates to mark where they read from. This map, currently will be static but there are plans to make it update over time.

The implementation itself is fairly straight forward. We'll need to update our grass generation to pass in UV's based on the world position of the object. This will give us a point where we can look up the information we need from our map.

Next we want to use the lookup texture to pull the information from our map. This will represent the direction, in world space, that the grass will face. RGB map to XYZ respectively in this case. Using this method we can replace the hardcoded normal values with something that we should be able to manipulate a lot more freely over time.

We'll also cover some of the behind the scenes refactorings I've done to make the code a bit cleaner and easier to read.

Grab the code from the Unity Visualizations project on GitHub: https://github.com/WorldOfZero/UnityVisualizations

Music Credits:
"Voice Over Under" Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/