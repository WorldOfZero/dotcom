---
title: "I'm Learning Moq - A .NET Mocking Framework for Unit Tests"
aliases: [/v/EJZ2xWGfFQw/]
date: 2020-03-27
featured_image: https://i.ytimg.com/vi/EJZ2xWGfFQw/mqdefault.jpg

---

{{% youtube id="EJZ2xWGfFQw" %}}

Mocking describes a feature in programming that allows you to replace the functionality of an object with a blank version of itself or provide your own functionality in its place. This allows you to isolate code paths throughout your program to more easily target and test distinct units within your code. The advantage of this isolation is that your test code becomes smaller and more manageable and the scope of individual tests is reduced allowing you to reduce the flakiness of your test cases (a test is "flaky" if the test fails when the unit of code it is testing is functioning correctly - or has non-deterministic  behavior). In order to accomplish all of this in .NET we're going to be exploring [Moq](https://github.com/moq/moq4).

Moq is a framework for .NET that makes it easy to generate and test mocked code. Given a class you are able to replace that class with a clone that matches all of the type requirements of the class but has none of the implementation leaving the rest up to you. It is compatible with most testing frameworks, but because we're hoping to later integrate with Unity 3D as part of our [Platforming game](https://www.youtube.com/playlist?list=PLEwYhelKHmigkz97T76r2bCt7wfG_1pPE) we'll be testing our integration of Moq with [NUnit](https://nunit.org/).

This framework is new to me so lets explore it together and cover some of the basic use cases that I'd like to employ Moq for: Mocking the value of object Properties, Mocking the value of object Functions and Mocking the results of a specific function invocation. From that hopefully we'll be able to build a better understanding of the capabilities of Moq and how we can best use it to improve the quality of our testing.

***

To add Moq to your dotnet project you can run:

```ps1
dotnet add package Moq
```

Moq is also on GitHub. You can browse the source and see code samples there: https://github.com/moq/moq4

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u