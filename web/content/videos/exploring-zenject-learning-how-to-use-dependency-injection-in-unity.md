---
title: "Exploring Zenject - Learning how to use Dependency Injection in Unity"
date: 2019-09-20
featured_image: https://i.ytimg.com/vi/e0KWsizPYAw/mqdefault.jpg

---

{{% youtube id="e0KWsizPYAw" %}}

Zenject is a Dependency Injection Container Framework built for .NET that is also compatible with Unity. Lets learn some of the basics of how to get Zenject setup and start injecting components.

The "Hello World" example for Zenject is here with instructions: https://github.com/modesttree/Zenject#hello-world-example

Dependency Injection is an Inversion of Control design pattern that switches the way classes find and resolve their dependencies. Instead of an object declaring the specific dependencies it uses the classes declare the types of their dependencies and a second controller identifies and "injects" those dependencies for the object to use.

This helps keep your objects a bit easier to maintain at the cost of some initial abstraction. Because your dependencies are injected into the classes instead of each class declaring their dependencies changing each dependency across an entire project can be done in a single place without having to modify large amounts of code. Additionally, when constructing tests for your project you can use this pattern to easily inject new behavior (either through mocks/fakes or with real implementations) that make your tests more predictable and easier to understand.

A potentially good use of Zenject is in place of the common static Game Manager classes a lot of games seem to inherit. These classes typically contain static references to dozens of different objects that control various parts of the game. As implemented this means that a single object has to understand all or most of how your game works. This typically leads to a large or difficult to maintain type. Using Dependency Injection each of those subtypes of the Game Manager can be their own dependency which is only injected into the classes that actually need to reference the component.

Zenject on GitHub: https://github.com/modesttree/Zenject
Zenject on the Unity Asset Store: https://assetstore.unity.com/packages/tools/integration/zenject-dependency-injection-ioc-17758

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u