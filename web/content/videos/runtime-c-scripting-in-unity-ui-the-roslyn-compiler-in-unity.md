---
title: "Runtime C# Scripting in Unity UI - The Roslyn Compiler in Unity"
aliases: [/v/FuZHnpgntEI/]
date: 2020-02-28
featured_image: https://i.ytimg.com/vi/FuZHnpgntEI/mqdefault.jpg

---

{{% youtube id="FuZHnpgntEI" %}}

Lets integrate the .NET Roslyn compiler into a Unity game so we can run basic scripts at runtime. This will allow us to write new C# code into a Unity UI object like a `Text Box` and then execute it. The goal here is exposing our script processor to something we can interact with outside of the Unity Editor.

We'll be exploring this inside of a compiled Unity game running on Windows (compatibility of this solution on other platforms may not be as easy).

This project uses the Roslyn Scripting API (`Microsoft.CodeAnalysis.CSharp.Scripting`). There are more examples of that here: https://github.com/dotnet/roslyn/wiki/Scripting-API-Samples

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u