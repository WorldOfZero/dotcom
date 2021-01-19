---
title: "Learning to Deserialize YAML in C# with YamlDotNET"
aliases: [/v/KXj5pAzmka8/]
date: 2021-01-05
featured_image: https://i.ytimg.com/vi/KXj5pAzmka8/mqdefault.jpg
tags: [ csharp,dotnet,tutorial,livecode ]

---

{{% youtube id="KXj5pAzmka8" %}}

YAML (Yet Another Markup Language) provides a way to store structured data in files. It can be used in similar ways to other JSON or XML files and is commonly used with Kubernetes and Docker Compose. In this video we'll be taking a look at how you can deserialize and consume data from a YAML file and use that data in your .NET applications.

To do this we'll be using a library called [YamlDotNet](https://github.com/aaubry/YamlDotNet). We'll be working with a .NET console application, but this library can also be used in ASP.NET, Unity3D or other .NET projects. YamlDotNet provides a set of API's for both serializing and deserializing YAML files, we'll be using these to parse a `tags.yml` file we provide into C# objects so that we can interact with them in our code.

### Example

If you want to parse a YAML file that looks like this:

```yml
user:
  name: "World of Zero"
```

You would use this in C# to create a `Player` object that represents the yml data.

```csharp
public static Player ParsePlayer(string ymlContents) {
  var deserializer = new DeserializerBuilder()
    .WithNamingConvention(CamelCaseNamingConvention.Instance)
    .Build();
  return deserializer.Deserialize<Player>(ymlContents);
}

public class Player {
  public User Username { get; set; } 
}

public class User {
  public string Name { get; set; }
}
```

### Installing YamlDotNet

YamlDotNet is available on [Nuget](https://www.nuget.org/packages/YamlDotNet) and can be installed from the `dotnet` command line using:

```sh
dotnet add package YamlDotNet
```

or via the Package Manager with

```sh
Install-Package YamlDotNet
```

> Note: Make sure to check [Nuget](https://www.nuget.org/packages/YamlDotNet) for the latest available version.

***

More about YamlDotNet on it's GitHub page: https://github.com/aaubry/YamlDotNet
You can find other YamlDotNet code samples at: https://github.com/aaubry/YamlDotNet/wiki/Samples
If you'd like to use YamlDotNet to parse YAML in Unity3D you can use the free package from Unity's Asset Store: https://assetstore.unity.com/packages/tools/integration/yamldotnet-for-unity-36292

***

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u