---
title: "Custom Lighting and Planet Shadows - Lets Make an Asteroid Belt- Part 3"
aliases: [/v/gULMIk3zr4o/]
date: 2017-02-02
featured_image: https://i.ytimg.com/vi/gULMIk3zr4o/mqdefault.jpg

---

{{% youtube id="gULMIk3zr4o" %}}

Time to dig into some custom lighting in Unity's Surface Shaders. We're going to be looking at how to cast shadows onto our planet ring shader, a transparent shader which normally would not have shadows. To do this we'll implement a custom lighting function based off of Unity's Standard GI shader and then take advantage of some dot product math to work out our shadow from our planet. This will require some math to compare the position of our sun, the planet and the fragment we are shading right now.

The specific formula we're going to be implementing is going to calculate two directional vectors. One from our Light (the Sun) to the Planet's center and the other from the Light to the fragment (or current pixel we are shading). Once we have these two vectors we can calculate the dot product between the normalized vectors (we care about direction, not distance) and then use that to generate our shadows. The dot product in this case is used to cast a perfect circle onto our ring, with some minor tweaks we can turn that into our planets shadow.

This approach has some issues. First our light does not work when on the bottom of our ring, it seems the normals are wrong. Second, the actual size of our planet isn't correctly represented in this shader so the shadow ends up being a bit small compared to the size of our planet. We'll look into fixing these issues in a future episode. For now, we've got a working planet ring shader that can receive shadows generated from our custom lighting model. I call that a win.

You can find the Unity CGInclude's I reference in this video here:
{Unity Install Directory}\Editor\Data\CGIncludes
These CGIncludes include a lot of the default data structures and functions available to you in your surface shaders. There's a lot of great stuff there and I highly recommend taking some time to check them out! This is how I found _WorldSpaceLightPos0 which is a key component of our lighting calculation.

Unity has a lot of great documentation on Surface Shaders. Here are some of the references used in this video:
https://docs.unity3d.com/Manual/SL-SurfaceShaders.html
https://docs.unity3d.com/Manual/SL-SurfaceShaderLightingExamples.html