---
title: "Adding an Accent to our Contrast Shader - Lets Make a Side Scrolling Shooter - Part 4"
alias: [/v/gu_bFoI2fIg/]
date: 2018-07-04
featured_image: https://i.ytimg.com/vi/gu_bFoI2fIg/mqdefault.jpg

---

{{% youtube id="gu_bFoI2fIg" %}}

Lets spice up our our contrasting transition shader with an accent color that more clearly marks the border between one color and the next.

Part 1 of building this contrasting shader is here: https://www.youtube.com/watch?v=jJcSbixSy5c

Most of the magic of this shader happens in these lines which select the color we want to draw:

```
float maskPrimary = (_Transition + barrierSize [LESS THAN] maskStrength);
float maskSecondary = (_Transition - barrierSize [GREATER THAN] maskStrength);
float maskAccent = !(maskPrimary || maskSecondary);
o.Albedo = maskPrimary * _PrimaryColor
  + maskSecondary * _SecondaryColor
  + maskAccent * _AccentColor;
```

Come join the World of Zero Discord channel to talk software, game development and more: https://discord.gg/hU5Kq2u