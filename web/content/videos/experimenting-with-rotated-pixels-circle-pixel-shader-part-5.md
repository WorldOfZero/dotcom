---
title: "Experimenting With Rotated Pixels - Circle Pixel Shader - Part 5"
aliases: [/v/-UIeB7OCw10/]
date: 2019-06-27
featured_image: https://i.ytimg.com/vi/-UIeB7OCw10/mqdefault.jpg

---

{{% youtube id="-UIeB7OCw10" %}}

I wanted to try something new and sort of experiment with a few concepts that build upon our circle pixel shader. I don't really know where it'll lead, but I'd like to dive into adding a rotation matrix to the effect. This should allow us to rotate all or part of the effect in order to get some fun new visualizations. I'm hoping we'll be able to have a diamond/offset pattern for our circular pixels rather than a more linear boxy pattern. Whether that actually works... well you'll have to watch and find out. 

The formula for a 2D rotation matrix looks like this:

```
[ cos θ, -sin θ ]
[ sin θ,  cos θ ]
```

More about rotation matrices on Wikipedia: https://en.wikipedia.org/wiki/Rotation_matrix

The circle pixels shader is open sourced on GitHub and you can grab the code there! This version of the shader will join it in a bit (cleaning the code up a bit first): https://github.com/WorldOfZero/UnityVisualizations/tree/master/CirclePixels

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u