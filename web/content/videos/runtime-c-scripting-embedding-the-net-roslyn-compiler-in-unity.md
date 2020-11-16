---
title: "Runtime C# Scripting - Embedding the .NET Roslyn Compiler in Unity"
alias: ["/v/YtzYkoWhrTk"]
date: 2020-02-20
featured_image: https://i.ytimg.com/vi/YtzYkoWhrTk/mqdefault.jpg

---

{{% youtube id="YtzYkoWhrTk" %}}

I've been experimenting with embedding Roslyn (the .NET compiler) into Unity. Here is what I've built so far.

Roslyn is a compiler for .NET that includes a package for scripting and expressions. This allows you to write C# code into standard strings and then compile and execute the code in memory. We can extend this further by integrating it with Unity and exposing the default types from our game. The end result of all of this is the ability to write basic strings with C# code in them that we can evaluate later to interact with any part of our system we choose. There are a number of potential use cases for this from debugging your compiled game with an embedded terminal to creating a game that teaches C#.

This solution does open up some potential for running code that should not be run. If you're trying this, please use caution when considering allowing code from the internet or other users to be run. This can have severe consequences if abused. Someone once said great power demanded great responsibility and that's the case here.

## Some Examples

Calculate 2³ power using `System.Math`:

```csharp
result = CSharpScript.EvaluateAsync[double]("System.Math.Pow(2,3)").GetAwaiter().GetResult();
```

Find a `Camera` object in the current scene:

```csharp
cameraObject = await CSharpScript.EvaluateAsync[GameObject]("GameObject.FindObjectsOfType[Camera]().First().gameObject",
    ScriptOptions.Default.WithImports( // Import namespaces to simplify scripts
        "System",
        "System.Collections.Generic",
        "System.Linq",
        "UnityEngine"
    ).AddReferences( // Include additional assemblies
        typeof(System.Linq.Enumerable).Assembly,
        typeof(UnityEngine.Transform).Assembly
    ));
```

The Roslyn Scripting API is documented on GitHub: https://github.com/dotnet/roslyn/wiki/Scripting-API-Samples

You can find the Nuget package here: https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp.Scripting/


Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u