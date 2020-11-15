---
title: "Disco Planet Ring Shader - Lets Make an Asteroid Belt - Part 1"
date: 2017-01-19
featured_image: https://i.ytimg.com/vi/vXxiVQ1Yda0/mqdefault.jpg

---

{{% youtube id="vXxiVQ1Yda0" %}}

Asteroids VR needs an asteroid belt so we're going to make one! In this video we're going to begin work on our basic ring shader which will be used for drawing the planetary ring of asteroids at a long distance. Additional work is required for this to work fully and it will only be used at longer distances (full 3D geometry will be used at close ranges). Still, this is the first major step in the project that will take shape over a number of episodes.

We'll start by developing a quick shader to detect the distance we are from it. With this we can then fade out and avoid rendering any objects near us. Next, we will use the Surface Shader's alpha:fade flag to fade in the shader over time so it grows more and more opaque the further it is from the camera.

After we get that working we'll work on developing the ring itself clamping the shader to only draw pixels within a range of the center of our mesh. This solution is not unlike how we solved our "perfect circle" problem in one of the earlier videos on this channel (https://www.youtube.com/watch?v=Ww1GbfnBH_Q). We just take this one step further to allow the shader to become a ring instead of just a flat circle.

After that it becomes a question of texturing. We'll apply a density map in order to identify how thick the debri is at any depth in our rings. Once that is done we've reached a great ending point for our shader. A simple though admittedly "bad mushroom trip" feeling shader that can render very colorful planetary rings.

There is still a lot to do however! Our shader isn't rendering shadows, has no real texture to it and more. We'll need more work to get this part of our Asteroid Belt working!