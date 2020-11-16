---
title: "Exploring a Trochoidal Wave Shader"
alias: [/v/moR3wly4S5Y/]
date: 2020-03-19
featured_image: https://i.ytimg.com/vi/moR3wly4S5Y/mqdefault.jpg

---

{{% youtube id="moR3wly4S5Y" %}}

Let's try to craft some trochoidal waves - a type of fluid simulation that is both fairly simple and also looks pretty good for creating basic waves in an ocean or other fluid. Trochoidal waves are simulated by moving vertices in a circular motion that causes vertices to condense and expand from one another. This can create the swells and dips that you'd expect from an ocean.

We'll be implementing this using a vertex shader that can manipulate the position of a meshes vertices based on distance.

The vertex shader that creates this effect for us looks like this (this effect is based on changes along the x axis in world space only, some modifications are required if we want this to work along different axis):

```shader
void vert (inout appdata_full v) {
    float3 worldSpace = mul(unity_ObjectToWorld, v.vertex);
    float3 rotatedOffset = float3(0,0,0);
    rotatedOffset.x = sin(_Time.x * _DeltaSpeed + worldSpace.x * _Offset) * _Radius;
    rotatedOffset.y = cos(_Time.x * _DeltaSpeed + worldSpace.x * _Offset) * _Radius;
    v.vertex.xyz += mul(unity_WorldToObject, rotatedOffset);
}
```


Freya's tweet on Trochoidal Wave's with examples: https://twitter.com/FreyaHolmer/status/1236079824575369219
Her twitch stream: http://twitch.tv/acegikmo

Some more background on Trochoidal Wave's: https://bubblepins.com/blog/trochoidal-the-shape-of-ocean-waves

More information on writing Surface Shaders in Unity can be found in the Unity manual: https://docs.unity3d.com/Manual/SL-SurfaceShaders.html

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u