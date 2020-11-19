---
title: "Using Properties and Steps in Part 2 of our Ripple in Shader Graph"
aliases: [/v/tL3GbBAqF3E/]
date: 2018-11-27
featured_image: https://i.ytimg.com/vi/tL3GbBAqF3E/mqdefault.jpg

---

{{% youtube id="tL3GbBAqF3E" %}}

There is still so much to learn in Unity's new Shader Graph feature. In this video our focus is twofold. We will be learning how to use Properties so our shaders can have their inputs tweaked without requiring us to recompile them, but we will also be revising some of the previous code we built based on some of the other stuff we've been learning. We'll drop the branching in our code in favor of the `step` function and will remove the Subgraph's we'd created because they're having trouble loading and it's preventing the Graph from being compiled into a new Shader.

![Here is a sample of the graph we built to create the final effect](https://yt3.ggpht.com/1OI9swoGzzlFyEEzvYMPFSbREO6U59RV6otLPLYVL2eXYLjn-ntiQWQBcfNPNCVxjkPzp9qamqHmFw=s1600-fcrop64=1,017c0000fe83ffff-nd)

The end result of this is will allow us to tweak the radius, location, inside and outside color of the circle we draw in world space. This allows us to do a lot more than we could previously even though we haven't really added that many new features. We also migrate to use an unlit shader instead of using the default PBR shader. This is new compared to our original surface shader and is closer to the end result we're trying to build. An unlit shader ignores lighting in the scene including things like global illumination and allows us to get a single consistent color across the entire surface our shaders material is applied to.

The World of Zero Discord Server: https://discord.gg/hU5Kq2u