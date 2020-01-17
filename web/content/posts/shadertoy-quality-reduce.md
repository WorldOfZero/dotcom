---
title: 'Shadertoy: Reduced Image Color Quality'
date: 2018-09-18
tags:
- shader
series:
- shadertoy
featured_image: "images/posts/shadertoy/reduced-color-range.jpg"
---

A [Shadertoy](shadertoy.com) shader that reduces the available colors to draw with. This demo reduces the normal range of colors per channel from 256 down to just 8 by using effectively separating each colors floating point value into different categories.

{{< shader id="llVczc" >}}

```
// The number of available color levels per color channel.
// 4 means: 0, 0.25, 0.5, 0.75, 1.0 are options.
const float imageFactor = 8.0;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / iResolution.xy;

    // Time varying pixel color
    vec3 col = textureLod(iChannel0, uv, 0.0).rgb; //0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));

    // Reduce the input color so each channel may only have 1 of 4 levels
    
    col = floor(col * imageFactor) / imageFactor;
    
    // Output to screen
    fragColor = vec4(col,1.0);
}
```

This effect might be useful for recreating an older type of video footage or simulating some form of corruption.