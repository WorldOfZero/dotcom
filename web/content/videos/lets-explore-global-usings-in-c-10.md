---
title: "Let's Explore Global Usings in C# 10"
aliases: [/v/z4THCW3b16k/]
date: 2022-10-17
featured_image: https://i.ytimg.com/vi/z4THCW3b16k/mqdefault.jpg
tags: [ csharp,dotnet,livecode ]

---

{{% youtube id="z4THCW3b16k" %}}

Global usings are a [new feature in C# 10](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10#global-using-directives) that give you the ability to declare a using directive over every source file in your project instead of needing to duplicate the declaration inside of each file in your projects! This can help you reduce the duplicated code in your projects and make commonly used libraries and namespaces more readily available across your project!

To use a global using you can add `global` before your using statements like this statement you might use in a data serializing/deserializing library:

```csharp
global using Newtonsoft.Json
```

Including a global using will cause the compiler to include the namespace when resolving types across the entire compilation of your project instead of scoping that reference to the file the using is a part of. What this typically means is that you will want to use this for common namespaces used across your project and continue using file based using statements when referencing more feature specific types.

You can find more information about using Global Usings as part of the using directive documentation here: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive#global-modifier

Global Usings are also part of the `ImplicitUsings` feature you might see in your `.csproj` files. To learn more about this feature you can watch this video! https://youtu.be/NlvhBpLl0DY

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u

This videos thumbnail uses a globe SVG from here: https://commons.wikimedia.org/wiki/File:Emojione_BW_1F30E.svg