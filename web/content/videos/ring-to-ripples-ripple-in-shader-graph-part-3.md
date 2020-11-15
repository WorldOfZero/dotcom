---
title: "Ring to Ripples - Ripple in Shader Graph - Part 3"
date: 2018-12-13
featured_image: https://i.ytimg.com/vi/_08No6ET-qk/mqdefault.jpg

---

{{% youtube id="_08No6ET-qk" %}}

Time to finally catch our Shader Graph Ripple Shader up to the existing Ripple we created in a Surface Shader a while ago. To do this we'll add two final effects, a rippling wave that can transition across a surface and the ability to fade the ripple out as it moves further from its origin.

We are able to generate the waves by manipulating different trig functions. In our case a cosine fits perfectly.

For the curious, the colors used to generate the thumbnail are:
* insideColor: `rgb(255, 0, 109)`
* outsideColor: `rgb(209, 149, 181)`
The way we handle colors in our binary select node contributes to the creation of the blue color. A post effect to add some bloom and saturation was added after the fact.

For reference, the creation of this same effect was done in a Unity Surface Shader. You can see how that was done here: https://www.youtube.com/watch?v=EhkBdCdNx-Y

The World of Zero Discord server: https://discord.gg/hU5Kq2u