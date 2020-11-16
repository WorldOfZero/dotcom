---
title: "Texturing and Diffuse Lighting  - Lets Make a Low Poly Shader  - Part 2"
alias: ["/v/SDH9GBc1D9M"]
date: 2017-02-15
featured_image: https://i.ytimg.com/vi/SDH9GBc1D9M/mqdefault.jpg

---

{{% youtube id="SDH9GBc1D9M" %}}

We were in an interesting spot after the last video. Things hadn't gone exactly according to plan. We're going to fix that in this video and also start work on texturing our low poly shader. This will allow us to use a texture and get an "average" color for each triangle we want to shade. A handy way to get some quick noise across our surface and add some color as well. Once we get that working we'll turn towards adding lighting to our model. Since we can't use Surface Shaders which serve as a great way to get uniform lighting across your shaders we will need to write our own lighting (at least to start).

Our texturing is accomplished by taking the average of a sample from our texture. The current solution uses the texture color at each triangle point and then takes an average of those values.

For the lighting we will only be implementing diffuse lighting from a single source. To accomplish this we're going to calculate the dot product between the direction of the light and the normal of the current triangle. This dot product determines the amount of light hitting any single face. This makes faces facing away from the light dark and those facing it gradually lighter as the result of the dot product increases.

In the future we'll want to add specular highlights and ambient light to make the appearance more natural. We'll also need to fix some of the weird behavior we're seeing in Unity. Not sure how to fix that last part, but we'll have to find a way.

The source code for this shader can be found in the World of Zero Arcade project on my GitHub page. You're welcome to use it for your own projects! https://github.com/WorldOfZero/Arcade