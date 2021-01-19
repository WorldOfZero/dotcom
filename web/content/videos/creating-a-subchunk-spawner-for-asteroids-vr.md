---
title: "Creating a Subchunk Spawner for Asteroids VR"
aliases: [/v/VaGI6j_4e7Y/]
date: 2019-06-06
featured_image: https://i.ytimg.com/vi/VaGI6j_4e7Y/mqdefault.jpg
tags: [ unity3d,livecode,csharp,dotnet ]

---

{{% youtube id="VaGI6j_4e7Y" %}}

Lets refactor the destruction system we built in a recent live stream. This lets us destroy "Asteroids" (read: cubes) in Asteroids VR by subdividing them until a minimum size is reached. This initial design relies on a single `MonoBehavior` to perform this and that has a few issues. The most annoying of these is a weird behavior with Unity's prefab system that causes the object to reference itself instead of the prefab we've created. Another thing I'd like to get out of this system that is currently difficult is a way to track and control the creation of new objects more centrally. This will allow us to more easily use an object pool later as well as more easily control how objects are generated in other ways.

To adopt this we'll be refactoring the code that instantiates new "Chunks" into a separate component which we'll discover by using [`GameObject.FindObjectOfType`](https://docs.unity3d.com/ScriptReference/Object.FindObjectsOfType.html). This retrieves a `MonoBehavior` from any `GameObject` in our scene which matches the type we're searching for. This search method is not the final solution we'll end up using later in development, but for testing right now it's more than enough to get us what we want. We can use the reference we retrieve to replace the actual instantiation, effectively moving the parts of the code we want into a separate place.

To make things a little easier and to make sure our new component is more useful we'll still do some of the lifting in the Asteroid's code. This includes calculating the rotation and world position of each new "Chunk" of the Asteroid. We do this so that the controller we built can be used to generate brand new Asteroids and not just create debris from existing ones.

There is still a bit more to do to get a fully functioning destruction system (we don't track health yet for example), but this gets us to a place where object destruction and creation works reliably well.

The base subdivision destruction system was built in a Live Stream which you can find here: https://youtu.be/POVJ-QIyygE

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u