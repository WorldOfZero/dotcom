---
title: 'Shadertoy: Grid Shader'
date: 2019-01-10
tags:
- shader
series:
- shadertoy
featured_image: "posts/shadertoy/infinite-grid.jpg"
---

A [Shadertoy](shadertoy.com) shader creating a grid. This makes it possible to create an infintely scalable grid pattern that is fairly light-weight.

{{< shader id="wdlGzX" >}}

```
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (fragCoord - 0.5 * iResolution.xy) / iResolution.y;

    // Time varying pixel color
    float scale = 15.0 + 5.0*cos(iTime);
    
    float gridPointX = step(float(mod(uv.x * scale, 1.0)), 0.1);
    float gridPointY = step(float(mod(uv.y * scale, 1.0)), 0.1);
    float gridPoint = min(1.0, gridPointX + gridPointY);

    // Output to screen
    fragColor = vec4(gridPoint, gridPoint, gridPoint, 1.0);
}
```