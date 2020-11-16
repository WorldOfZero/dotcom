---
title: "Exploring Top-Level Programs in C# 9"
aliases: [/v/uxxROAx6MMU/]
date: 2020-09-21
featured_image: https://i.ytimg.com/vi/uxxROAx6MMU/mqdefault.jpg

---

{{% youtube id="uxxROAx6MMU" %}}

Top-Level Programs is a new feature being introduced in C# 9.0 that significantly simplifies certain C# programs and allows you to remove almost all of the boilerplate code from them. This pattern allows you to call functions at the top-level of your C# program meaning that you do not need a class or function definition in order to call those functions. Instead C# automatically generates that code for you when your code is compiled.

The simplest top-level program is just one line:

```csharp
System.Console.WriteLine("Hello, World of Zero!");
```

There are a few special features included with top-level programs that help you to fully use some of the features like accepting command line arguments or async functions.

### `args` variable

C#'s top-level programs include a magic `args` variable which contains a `string[]` of command-line arguments provided. Here is a working example script that accepts a command line argument to greet you by name.

```csharp
using System;

// If there is 1 argument greet that argument by name
if (args.Length == 1)
{
    Console.WriteLine($"Hello, {args[0]}!");
} else { // Otherwise greet a generic Internet 🤖
    Console.WriteLine("Hello Internet!");
}
```

Use `dotnet run -- "World of Zero"` or similar to run this code and be greeted with "Hello, World of Zero!"

### `async` and `await` support

You may take advantage of async functions inside of a top-level program. This allows for things like async file operations, web requests etc to be made without having to wrap them in a separate async function.

For example this task will print two numbers with a short pause between them.

```csharp
using System;
using System.Threading.Tasks;

Console.WriteLine("One");
await Task.Delay(1000);
Console.WriteLine("Two");
```

***

More info about some of the new features in C# 9.0 and how to use them is available here: https://devblogs.microsoft.com/dotnet/welcome-to-c-9-0/

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u