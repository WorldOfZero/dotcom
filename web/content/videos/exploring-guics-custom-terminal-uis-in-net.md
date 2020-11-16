---
title: "Exploring Gui.cs - Custom Terminal UI's in .NET"
aliases: [/v/sVYiDboAe_E/]
date: 2020-02-19
featured_image: https://i.ytimg.com/vi/sVYiDboAe_E/mqdefault.jpg

---

{{% youtube id="sVYiDboAe_E" %}}

Gui.cs is a library put together by Miguel de Icaza that allows you to compose complex Terminal UI's using a collection of `View` components such as `Window`s, `Button`s, `ListView`s or `Label`s. This allows you to create relatively complicated UI interfaces without having to manually handle some of the rendering requirements that entails. In this video I'd like to explore it as a first time user and see what possibilities it creates for us.

We'll explore a number of things including:

* How to create and size an application `Window`.
* How to parent objects to one another so components may be nested within one another.
* How to create lists of objects.
* How to create a custom list container for computed sets of items (we'll create an infinite list of integers) using the `IListDataSource` interface.

Because this is my first time seeing this library we'll also see what some of the stumbling blocks might be and what the solution to them is. Let's explore Gui.cs together and see what we can make!

A simple example script to render a basic text label looks like this:

```csharp
Application.Init ();
var top = Application.Top;
var label = new Label("Hello, Gui.cs!");
top.Add(label); 

Application.Run();
```

The Gui.cs source code is available on GitHub here: https://github.com/migueldeicaza/gui.cs

GUI.CS is available on Nuget: https://www.nuget.org/packages/Terminal.Gui

More information about String Interpolation and Formatting: https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting#format-string-component

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u