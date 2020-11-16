---
title: "A Compile Time Builder Pattern in Java"
aliases: [/v/N31rou85xec/]
date: 2017-08-07
featured_image: https://i.ytimg.com/vi/N31rou85xec/mqdefault.jpg

---

{{% youtube id="N31rou85xec" %}}

The builder pattern allows you to avoid messy constructors that get out of hand as dozens of parameters get added to the objects you're building. It's a powerful tool for simplifying code and making it easier to read. However, it does introduce a few downsides, most notably you lose compile time error checking to validate that the constructors you are implementing via builders will result in valid objects. In this video we'll look at a potential solution to that problem that involves implementing something very close to a typed state machine to handle our object building.

This pattern works by creating interfaces that chain together one after another until a finalizer statement is reached that terminates the chain. This allows each interface to explicitly define what the next step in object construction is including support for branching arguments, optional arguments and more!

What do you think? Does it work? Does it add too much complexity for the minor added benefit?

The blog post detailing this style of Builder pattern. http://blog.crisp.se/2013/10/09/perlundholm/another-builder-pattern-for-java

Discord: https://discord.gg/hU5Kq2u