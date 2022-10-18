---
title: "Let's Explore Implicit Usings in C# 10"
aliases: [/v/NlvhBpLl0DY/]
date: 2022-10-17
featured_image: https://i.ytimg.com/vi/NlvhBpLl0DY/mqdefault.jpg
tags: [ csharp,dotnet,tutorial,demo ]

---

{{% youtube id="NlvhBpLl0DY" %}}

Implicit usings is a feature in .NET that allows you to have the compiler automatically add [global usings](https://youtu.be/z4THCW3b16k) to your projects for common namespaces used in projects of the type you've chosen. This can help you get started more quickly in .NET by automatically importing common namespaces like `System` and `System.Linq` without you having to explicitly declare them somewhere in your projects.

You can turn on Implicit Usings in your .NET 6 projects by adding this line to your Project file.

```csproj
<ImplicitUsings>enable</ImplicitUsings>
```

Implicit Usings introduce namespaces into the global space. You can learn more about how to add your own custom namespaces here by using `global` usings: https://youtu.be/z4THCW3b16k

> Note: You can always check which implicit usings are being generated for your project by navigating to your projects `obj` directory and finding the generated file named: `[Your Projects Name].GlobalUsings.g.cs`.

You can find a more in-depth dive into this feature here: https://dotnetcoretutorials.com/2021/08/31/implicit-using-statements-in-net-6/

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u