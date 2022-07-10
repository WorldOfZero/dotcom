---
title: "Using C#'s nameof Expression - C# Quick Tip"
aliases: [/v/48iBTUYjf8k/]
date: 2022-07-10
featured_image: https://i.ytimg.com/vi/48iBTUYjf8k/mqdefault.jpg
tags: [ csharp,dotnet,tip,tutorial ]

---

{{% youtube id="48iBTUYjf8k" %}}

The `nameof` expression allows you to convert a variable, property, type or function into a string that represents its name. This can be an alternative to typing out strings directly in your code when you need to reference the name of an object in your code. This is really common when implementing `INotifyPropertyChanged` events and has a number of other uses as well.

The advantage of using `nameof` compared to writing out the object in a string is that the dotnet compile will fail if the reference in your nameof expression does not exist. This can help catch issues during refactoring when elements are renamed. Typically, when using strings directly those references can become runtime errors and potentially be very difficult to identify (ex. a UI element not updating because it no longer receives its Property Update notification). `nameof` can help avoid that issue in your code.

Some examples of how to use `nameof`:

```csharp
class Program
{
    public float aVariableNamedFoo = 3.14f;
    public float Foo => aVariableNamedFoo;

    static void Main(string[] args)
    {
        Console.WriteLine($"Class: {nameof(Program)}"); //Class: Program
        Console.WriteLine($"Variable: {nameof(aVariableNamedFoo)}"); //Variable: aVariableNamedFoo
        Console.WriteLine($"Property: {nameof(Foo)}"); //Property: Foo
        Console.WriteLine($"Function: {nameof(Main)}"); //Function: Main
    }
}
```

`nameof` can also be used against members of other objects. For example the `nameof` a List's Count can be retrieved using:

```csharp
var contents = new List<Page>();
Console.WriteLine($"List Count: {nameof(contents.Count)}"); //List Count: Count
```

You can learn more about using `nameof` in the C# documentation here: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/nameof

***

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u