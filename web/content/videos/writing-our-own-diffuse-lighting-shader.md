---
title: "Writing Our Own Diffuse Lighting Shader"
alias: ["/v/4XfXOEDzBx4"]
date: 2019-07-24
featured_image: https://i.ytimg.com/vi/4XfXOEDzBx4/mqdefault.jpg

---

{{% youtube id="4XfXOEDzBx4" %}}

Lets explore how to build diffuse lighting onto our meshes. This is intended as somewhat of an introduction to some of the magic behind shaders.

There are two types of shaders you will typically create a in Unity. The first is the Standard [`Surface Shader`](https://docs.unity3d.com/Manual/SL-SurfaceShaders.html). These are very Unity specific and include a lot of custom code to integrate cleanly into Unity's lighting systems. Because of this, a `Surface Shader` doesn't require you to create any custom lighting and will automatically function and look natural inside of most environments. It will receive lights, cast shadows and more.

That isn't the case for the `Unlit Shader` which removes the Unity specific `surface` function for more traditional `vertex` and `fragment` ones which align very closely with how a shader might work in OpenGL or other engines (though not necessarily identically!). Like the name suggests an `Unlit Shader` has no lighting effects, the default shader will just draw a texture onto a mesh and be as true to color as possible for that texture.

Just because the shader doesn't include things like lighting doesn't mean we can't add our own though. First though, we should take a look at vertex and fragment shader functions.

- `#pragma vertex vert`: will declare a function for a vertex shader named `vert`. Vertex shaders jobs are to transform a mesh into a camera based position so that it  can be drawn onto the screen. This is done using a series of matrix multiplications. Luckily that work is already done inside of Unity's templates with the code `o.vertex = UnityObjectToClipPos(v.vertex)`. That code accepts an input vertex which will be a point relative to the original position of the object (in our example we use 3 boxes, the *input* of the 3 boxes is the same vertices but the *output* is modified because while the cubes are identical they're in different positions). Vertex shaders can store other information than the position of a vertex such as the color or normal direction of the mesh and we can introduce extra information we may need here as well.

- `#pragma fragment frag` will declare a fragment shader with the name `frag`. These are passed the output information from the vertex shader and are responsible for actually putting color on the screen. They're called `fragments` and not `pixels` here because it's actually possible for multiple `fragments` to be drawn in a single pixel for a variety of reasons (meshes overlapping one another for example). Inside the `fragment shader` the values from the vertex shader are not necessarily received unmodified. Your graphics cards will do some fancy interpolation for you between these two steps. If you think of the vertices in our mesh like numbers on a number line you might end up with a line that has 0 and 1 on it. The fragment shader represents the entire line including 0 and 1, but also all the numbers in-between. In the cases of those intermediate numbers we don't usually want duplicates of 0 and 1 but the unique value at that position in the number line. Fragment shaders will do this calculation for us and interpolate colors, vectors and more for us and pass those interpolated values into the input of the fragment shader.

Using this information we can introduce a custom lighting effect by passing the normal value of each vertex into our shader. This will give us a direction facing away from the face of the mesh (the normal of the floor - as an example - is straight up). Using a `dot product` we can compare the result of that normal value to a global light source to determine how strongly the light is impacting that point on the mesh. A very quick sample of what the code to do this might look like is this:

```shader
fixed3 lightDirection = fixed3(0, -1, 0); // Create a light source from directly overhead
// A max function is used here to prevent negative values during our math.
fixed lightIntensity = max(-1 * dot(lightDirection, input.worldNormal), 0);
```

Code for the full shader will be released in the next few days.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u