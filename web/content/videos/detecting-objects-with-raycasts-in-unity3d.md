---
title: "Detecting Objects with Raycasts in Unity3D"
aliases: [/v/vqc9f7HU-Vc/]
date: 2020-12-04
featured_image: https://i.ytimg.com/vi/vqc9f7HU-Vc/mqdefault.jpg
tags: [ unity3d,tutorial,csharp,dotnet ]

---

{{% youtube id="vqc9f7HU-Vc" %}}

Raycasts provide a way for you to project lines through your scenes and detect the objects they hit as well as return important information about what they hit. This gives you a way to detect if a projectile will impact a surface, test if one player can see another, simulate a laser pointer and more.

There are two main ways of raycasting in Unity. The first behaves like a laser pointer being cast out from an origin point and stopping once it encounters a single object (or its maximum range). The other option uses the `Physics.RaycastAll` and returns a set of all objects that would be impacted across the entire length of the ray.

Raycasts may be made by providing just an origin point and the direction. This returns true if any object is in the path of the ray, otherwise it results in false. For example the code to see if an object is in front of the attached Game Object might look like this:

```csharp
bool hitDetected = Physics.Raycast(this.transform.position, this.transform.forward);
```

Raycasts return a boolean representing if they hit an object or not. If you would like to learn more about what your ray hit you'll need to take advantage of the [`RaycastHit`](https://docs.unity3d.com/ScriptReference/RaycastHit.html) object. This provides information about the collider you impacted, the point of impact, that objects transform and more. Because of the way values are returned a typical pattern of using Raycasts looks like this:

```csharp
var ray = new Ray(this.transform.position, this.transform.forward);
RaycastHit hit;
if (Physics.Raycast(ray, out hit))
{
    objectHit = hit.transform.gameObject;
}
```

### Raycasting Examples

Here is a collection of a few ways you could apply raycasts from my previous projects:

* [Obstacle Avoidance and Steering Algorithms](https://youtu.be/SVazwHyfB7g)
* [Reflecting Projectiles Off Walls](https://youtu.be/GttdLYKEJAM)
* [Adding Gravity and Trajectory Prediction](https://youtu.be/d7pwmO6IS2I)
* [Projectile Penetration and Shooting Through Walls](https://youtu.be/RIru7m73HZA)
* [Help Debugging Rays with Unity Gizmos](https://www.youtube.com/watch?v=USwrSUpIgLI)

### Raycast Alternatives

Unity includes a set of functions that can be used in place of raycasts that use different shapes such as spheres or boxes to detect collisions. These function similarly to raycasts for the most part besides having a different shape.

#### [`SphereCast`](https://docs.unity3d.com/ScriptReference/Physics.SphereCast.html)
`SphereCast` projects a sphere along a ray effectively allowing your raycast to have a radius around itself when detecting objects. This has a few uses but one of the most common is in the development of [third person cameras](https://youtu.be/Cfcr7FtbYQo) to prevent them from clipping into level geometry and ensure they behave more cleanly in tight corners.

#### [`BoxCast`](https://docs.unity3d.com/ScriptReference/Physics.BoxCast.html)
`Boxcast` projects a box along the ray and allow you to test if a box may move without colliding with an object.

#### [`CapsuleCast`](https://docs.unity3d.com/ScriptReference/Physics.CapsuleCast.html)
`CapsuleCast` projects a capsule along a ray and can be useful for detecting things like potential player movement.

#### [`LineCast`](https://docs.unity3d.com/ScriptReference/Physics.Linecast.html)
This functions identically to a `Raycast` however instead of expecting an origin and direction and `LineCast` expects two points and detects if an object is between those two points.

### 2D Raycasts

Variants of the 3D Raycasts and its alternatives can be used when your using Unity's 2D Physics system. These have a different syntax and the two raycasting systems are *not* intercompatible. `Physics.Raycast` will interact with 3D Colliders, `Physics2D.Raycast` will interact with 2D Colliders. To learn more about using Raycasts in a 2D scene see the documentation for [`Physics2D.Raycast`](https://docs.unity3d.com/ScriptReference/Physics2D.Raycast.html).

***

The Raycasting documentation is here: https://docs.unity3d.com/ScriptReference/Physics.Raycast.html
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u
I've published additional content on my website at https://worldofzero.com
You may find some of the World of Zero Open Source projects at https://github.com/WorldOfZero