---
title: "Simulating Planetary Temperature - An Old Test Project"
date: 2016-09-21
featured_image: https://i.ytimg.com/vi/XatMVo5lJxk/mqdefault.jpg

---

{{% youtube id="XatMVo5lJxk" %}}

This is an old concept I made years ago to experiment with heating a planet. I discontinued work on this specific concept shortly after recording this, the design was not a good one, but I think it's still interesting.

The scene consists of three Camera's aligned left to right horizontally. The first displays the heat template of the planet, the second and third cameras display two perspectives of the planet. The planet itself is rotating around a point light at the center of the scene  which also serves as the source of heat. Each pixel on the planet's texture (remember the thing on the left?) is positioned on the planet sphere. A dot product is calculated towards the sun and then based off of that the heat map is updated.

This clearly didn't work exactly as I had planned as there are significant holes in the heating and it is very inconsistent. It also has the side effect of being really, really slow. The plus side of this is that it does allow us to dynamically heat an object. With this working it's possible to freeze the backs of planets or poles normally. This can generate summer and winter when placed in a standard orbit and, if the planet is tidally locked you can make the back of it freeze completely while the front side roasts in the sun. It's actually really neat! Slow, but neat.

You will notice that the texture itself fades between three different colors. The red, green and blue channels of the heat texture do not actually represent the heat of the sphere, that is actually stored in a data structure in a script. What this texture does represent though is the strength of the texture map to use.

Our planet has 3 unique textures, one for cold, temperate and hot climates. These are then bound to each of the respective channels in the texture. This allows our script to accept various heat ramps or do other blends of the textures. All in all, it was a fairly interesting experiment.

Why share it though? That's the fun part. Since developing this, I've worked on a few other ways to dynamically heat a planet and simulate planetary bodies on a broader sense. There are better ways to do this, but you don't get quite the same opportunities as this provides, you need to cut corners somewhere.

If you have any ideas you want to see explored, let me know in the comments below!