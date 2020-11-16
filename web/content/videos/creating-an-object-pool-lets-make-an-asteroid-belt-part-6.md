---
title: "Creating an Object Pool - Lets Make an Asteroid Belt- Part 6"
aliases: [/v/X9Tqng-g2DQ/]
date: 2017-03-01
featured_image: https://i.ytimg.com/vi/X9Tqng-g2DQ/mqdefault.jpg

---

{{% youtube id="X9Tqng-g2DQ" %}}

In this video we're going to be implementing a Generic Object Pool. Object Pooling is a design pattern focused on removing expensive operations such as instantiation or deletion of objects and instead relying upon a constant "pool" of objects which can be activated or deactivated as needed without needing to actually create new ones. The advantage of this approach is that it removes significant CPU spikes when large number of instantiations might occur such as in a bullet hell, when emitting particles or, in our case, when a large number of asteroids come into range. The downside of this implementation is the introduction of some memory overhead to store a large number of objects that may not necessarily ever be needed. However, the cost of there is relatively minor in modern hardware compared to the significant gains we get by avoiding slow garbage collections caused by instantiating and then deleting objects.

To implement our pool we are going to use a circular array of prefabs. When we start our game we will instantiate a preset number of prefabs and immediately deactivate them. Then, when we need to instantiate a prefab we will cycle through our array starting from the index immediately after the last object we created until we iterate over the entire list. We'll look for any deactivated instance that we can use. Once we find one, we activate it and position and rotate it in space just like the normal GameObject.Instantiate would function. This removes the object from the available items in the queue (it's active now).

When we need to destroy an instance we simply deactivate the instance. This causes it to appear as available again in our queue. The full implementation isn't very difficult, but the advantages it gives are actually fairly significant and we'll be able to take advantage of them more and more as we add more instances.


Want to use this pool in your own projects or just want to browse the source code? Check out the GIST on GitHub: https://gist.github.com/runewake2/3a427703b4929a014fa7a83a496cea3c

Some additional resources if you want to learn more:
Official Unity example of an Object Pool implemented in Unity 4.3 in order to create a bullet hell game: https://unity3d.com/learn/tutorials/topics/scripting/object-pooling

A text based tutorial and example of using an object pool to create a custom particle system implementation via Cat Like Coding: http://catlikecoding.com/unity/tutorials/object-pools/