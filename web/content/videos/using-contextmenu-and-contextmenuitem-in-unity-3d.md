---
title: "Using ContextMenu and ContextMenuItem in Unity 3D"
aliases: [/v/GKG-vUFt3D4/]
date: 2021-03-28
featured_image: https://i.ytimg.com/vi/GKG-vUFt3D4/mqdefault.jpg
tags: [ unity3d,csharp,dotnet ]

---

{{% youtube id="GKG-vUFt3D4" %}}

There are a lot of options available to you when you want to test your project in Unity3D and validate that your code actually does what you think it does. Sometimes you just need a quick way to perform some action or access some area during development. One of the ways to introduce this into the editor is through modifications to Unity's inspector. The `ContextMenu` and `ContextMenuItem` attributes provide this option by allowing you to create menu's in the Unity inspector that can execute functions on your `MonoBehavior`s.

Thanks to [Jason Storey](https://www.youtube.com/channel/UCG6MguMC0ntGCvVyaEwTPzw) for recommending the use of `ContextMenu`'s. You can find more of their content as a guest in videos at Infallible Code: https://www.youtube.com/user/charlesamat

### Code Examples

Some example uses of Unity 3D's `ContextMenu` and `ContextMenuItem` Attributes:

#### `ContextMenu`

A `ContextMenu` Attribute is attached to functions in your `MonoBehavior`. When that menu item is clicked it will invoke the function the attribute is assigned to:

```csharp
[ContextMenu("Context Menu Example")]
void HelloContextMenu() {
    Debug.Log("Context Menu Clicked!");
}
```

#### `ContextMenuItem`

A `ContextMenuItem` Attribute is attached to a field and requires you to provide the name of a function that will be invoked when the menu item is clicked.

```csharp
[ContextMenuItem("Context Menu Item Example", nameof(InvokeContextMenuItem))]
public float someVariable;

void InvokeContextMenuItem() {
    Debug.Log("Context Menu Item Clicked!");
}
```

[`nameof`](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/nameof) is a C# function that returns a string representation for the name of the class, function, field, property etc that is referenced. Using this allows things like refactoring's to function better and provides compiler errors if you spell a function name incorrectly (`nameof(FunctionName)` will throw an error if `FunctionName` is not defined).

> Note: The functions invoked by both `ContextMenu` and `ContextMenuItem` should not have any arguments.

***

Unity's documentation on the `ContextMenu` Attribute: https://docs.unity3d.com/ScriptReference/ContextMenu.html
Unity's documentation on the `ContextMenuItem` Attribute: https://docs.unity3d.com/ScriptReference/ContextMenuItemAttribute.html
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u