---
title: "Spherical Gravity in Unity"
aliases: [/v/JThYzdam2C0/]
date: 2025-11-25
featured_image: https://i.ytimg.com/vi/JThYzdam2C0/mqdefault.jpg
tags: [ unity3d,csharp,dotnet,livecode ]

---

{{% youtube id="JThYzdam2C0" %}}

Today we're going to be taking a look at creating spherical gravity systems in Unity. This will allow us to simulate realistic orbits of objects in our game or create three dimensional worlds that you can walk around and jump between.

The formula for newtons law of gravity is: `The Gravitational Constant * ((Mass of Body 1 * Mass of Body 2) / Distance Between Objects Squared)`

We can translate this into Unity by applying force to every Rigidbody in the scene using a function like this:

```csharp
foreach (var otherBody in otherBodies)
{
    var distance = Vector3.Distance(transform.position, otherBody.transform.position);
    var direction = (transform.position - otherBody.transform.position).normalized;
    var gravityForce = gravity * ((body.mass * otherBody.mass) / (distance * distance));
    otherBody.AddForce(direction * gravityForce * Time.deltaTime);
}
```

This function block iterates over every `otherBody` in a list of `otherBodies` (`RigidBody`'s) and calculates two values. The force applied to the `otherBody` based on the law of gravity and the vector of the force to apply to that object. Then we apply the gravitational force to the object using `AddForce`.

note: `Time.deltaTime` has been added to the code example to make physics consistent. I missed this in the video.

***

I've been working on a lot of IRL projects lately and only recently am getting back into some Unity related projects. Hopefully we'll be able to share more soon as I step back into doing more game dev related work.

***

Newton's Law of Gravity: https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation
Unity Rigidbody Reference: https://docs.unity3d.com/ScriptReference/Rigidbody.html