---
title: "A Perfect Circle - Building a Flat Shader in Unity - Part 3"
alias: ["/v/Ww1GbfnBH_Q"]
date: 2016-10-19
featured_image: https://i.ytimg.com/vi/Ww1GbfnBH_Q/mqdefault.jpg

---

{{% youtube id="Ww1GbfnBH_Q" %}}

Let's return to our flat shader. Today we're going to be developing a perfect circle. At least, as perfect as we can make it. To do this we are going to expand upon the shader we already have, but we'll be adding math. Nothing to complex, just a quick distance equation.

Once we get this done we should be able to draw a circle. The difference between this and what we currently have is that this shader can draw with precision up to the pixels on our screen. This is in contrast to our previous implementation which could only draw with precision up to the number of pixels in our source texture. Ideally, this means we get to draw a perfect circle... at least until we hit floating point errors.

Like what I'm doing? Drop a comment below and let me know what else you want to explore?

Never heard of Unity before? It's free! You can get a copy of the Unity Game Engine from their website here: http://unity3d.com. This download also includes an optional copy of Visual Studio (the editor I am using in much of this video).

Check out this project on GitHub: https://github.com/WorldOfZero/2D-Flat-Shape-Shader