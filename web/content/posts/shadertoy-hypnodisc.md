---
title: 'Shadertoy: Hypnodisc'
description: 'A Shadertoy shader creating a classic hypnotic disc effect.'
date: 2017-06-28
tags:
- shader
featured_image: "images/posts/shadertoy/hypnodisc.jpg"
---

A [Shadertoy](https://shadertoy.com) shader creating a classic hypnotic disc effect.

{{< shader id="ldsfDX" >}}

```
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  // Calculate coordinate with 0,0 at middle of screen
  vec2 uv = (fragCoord - 0.5 * iResolution.xy) / iResolution.y;
  // distance in UV Space from center of screen to current fragment
  float distance = length(uv);
  // Calculate the angle to the current fragement from the center of screen
  float angle = atan(uv.y, uv.x);
  
  // 360 to radians
  float pi2 = 3.14159265 * 2.0;
  // Individual color functions combined into a single line:
  // float r = sin(distance * 50.0 + angle + iTime);
  // float g = sin(distance * 50.0 + angle + iTime + (1.0 / 3.0) * pi2);
  // float b = sin(distance * 50.0 + angle + iTime + (2.0 / 3.0) * pi2);
  // Condense the above into this:
  fragColor = sin(distance * 50.0 + angle + iTime + (vec4(0.0,1.0,2.0,0.0) * pi2 / 3.0));
  
  fragColor = clamp(fragColor, 0.0, distance); // Fade colors towards center
}
```

I also recorded a walkthrough of building this shader that goes into a bit more depth about how everything works. You can see it on [YouTube](//www.youtube.com/watch?v=Y2IADn-wAZM).

{{< youtube id="Y2IADn-wAZM" >}}