---
title: "Creating a Context Menu in Custom Unity Editors"
aliases: [/v/K0XHwqOmdvc/]
date: 2019-05-16
featured_image: https://i.ytimg.com/vi/K0XHwqOmdvc/mqdefault.jpg
tags: [ unity3d,tools ]

---

{{% youtube id="K0XHwqOmdvc" %}}

I've been experimenting with creating custom Inspectors and Editor Windows in Unity lately and one of the features I've found is the `GenericMenu` class. This allows you to create Drop Down and Context Menu's in Unity.

To draw a Context Menu with two options (Foo and Bar) which will print themselves to the Unity Console when clicked the code might look something like this:

```csharp
// Create a new Generic Menu object
var menu = new GenericMenu();

// Create a reusable function for the menu options
var function = new GenericMenu.MenuFunction2((name) ⇒ {
    Debug.Log($"{name}");
});

// Create two new menu options to print foo and bar
menu.AddItem(new GUIContent("Print Foo"), false, function, "Foo");
menu.AddItem(new GUIContent("Print Bar"), false, function, "Bar");

// Display the context menu
menu.ShowAsContext();
```

The documentation for `GenericMenu` is also on Unity's scripting references with additional examples: https://docs.unity3d.com/ScriptReference/GenericMenu.html

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u