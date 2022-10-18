---
title: "Detect Objects in Your Camera View - Unity Geometry Utilities"
aliases: [/v/XrqesjfcitU/]
date: 2022-10-18
featured_image: https://i.ytimg.com/vi/XrqesjfcitU/mqdefault.jpg
tags: [ livecode,csharp,dotnet,unity3d ]

---

{{% youtube id="XrqesjfcitU" %}}

Let's explore how you can detect when an object is inside the players camera view by using the camera's frustum and axis-aligned bounding boxes (AABB).  This takes advantage of Unity's built in [`GeometryUtility`](https://docs.unity3d.com/ScriptReference/GeometryUtility.html) class that provides some helper functions to make this easier.

The first thing to do is define a set of planes we can use to describe the view of our camera. This is called a frustum and is the white box-like gizmo you see in Unity's scene editor when you select a `Camera`. The frustum defines your cameras view and we can take advantage of this to test if objects are inside or outside of the bounds we calculate.

In order to calculate the frustum planes we'll want to run `GeometryUtility.CalculateFrustumPlanes(...)` and pass in the camera we want to calculate the Frustum of. In our quick example we'll use `Camera.main` to grab the main camera in our scene.

Once we've calculated the camera frustum planes we can provide those to the `GeometryUtility.TestPlanesAABB(...)` method to test if the bounding box we provide is inside or outside of the planes we calculated earlier. This method returns true if the bounding box provided overlaps with or is inside of the `Plane[]` boundaries. In this case we're testing if a bounding box overlaps or is inside of the camera's viewport.

To get the bounds of an object you can use the `Collider.bounds` field. This calculates a world space axis-aligned bounding box for the collider and returns it to you so you can reference it in your object. The bounds are always a box aligned to the XYZ planes but are supported on all types of `Collider` in Unity. 

Once you've passed your bounds into the test function you can use that to perform your behavior for objects in or out of view. This can be used to freeze objects when they come into view (like the Doctor Who Angels) or to move/delete an object when it gets out of sight (like some gibs you only want to be cleaned up when the player looks away). There's a lot of different uses for functions like this!

The code I'm using in this example has an `Update` that looks like this:

```csharp
var bounds = collider.bounds;
cameraFrustum = GeometryUtility.CalculateFrustumPlanes(camera);
if (GeometryUtility.TestPlanesAABB(cameraFrustum, bounds))
{
    renderer.sharedMaterial.color = Color.green;
}
else
{
    renderer.sharedMaterial.color = Color.red;
}
```

You can learn more about dot product here: https://youtu.be/8cZo-c-f1yc

***

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u