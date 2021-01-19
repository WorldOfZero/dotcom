---
title: "Placing our Health Tracker Component Under Test with Unity Test Runner"
aliases: [/v/XdlBSXIcMvA/]
date: 2019-04-09
featured_image: https://i.ytimg.com/vi/XdlBSXIcMvA/mqdefault.jpg
tags: [ unity3d,livecode,test,codehealth ]

---

{{% youtube id="XdlBSXIcMvA" %}}

Lets explore this new health tracking component we've built by introducing the Unity Test Runner to our project. The Unity Test Runner allows you to add a variety of NUnit tests to your project that allow you to create Edit and Play mode tests. In this video our goal is to build a testing system that is able to validate all the capabilities of the `HealthTrackingComponent` we have. This is my journey learning and implementing tests on the project.

I've identified 3 main features we'll want to place under test:

 - That the value of our health can be changed.
 - That the event we have tied to updating the health is fired.
 - That the event is initialized when the component starts.

It turns out this is actually a bit difficult to put set up and requires a bit of undocumented work to make your games MonoBehavior's and classes available to your test. We'll walk through how to create this project definition so your tests can reference one another, then we'll look into how to test Mono Behavior's. This is also a bit tricky. It is not possible in Unity to create a MonoBehavior like a standard Unity class by calling something like:

```csharp
var myMonoBehavior = new MyCoolNewMonoBehavior();
myMonoBehavior.health = 42;
```

Constructing MonoBehaviors like this simply isn't supported. Instead we'll need to approach this in one of two ways. We can create a GameObject and assign the MonoBehavior to that GameObject or we can leverage one of Unity's testing features the `MonoBehaviorTest`. This class creates a temporary GameObject for your test and attaches your MonoBehavior to it so you can test things.

Once we have these systems setup we're able to start exploring the Test Runner more deeply to place our system under test and help validate that it is functioning.

The `MonoBehaviorTest` is documented more fully by Unity here: https://docs.unity3d.com/ScriptReference/TestTools.MonoBehaviourTest_1.html

Unity's documentation for the Unity Test Runner is currently pretty sparse, but you can find it here: https://docs.unity3d.com/Manual/PlaymodeTestFramework.html

One thing I try to focus on with tests is creating clear actions/next steps when a test fails. Often it can be tempting to combine tests into larger ones. In some cases this does make sense, however in a lot of cases larger tests can make your test more complex and also mean that when the test fails you no longer know what is wrong. This can lead to a lot of extra debugging that a simpler test can often help you avoid.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u