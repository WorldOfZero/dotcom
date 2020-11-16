---
title: "Live Coding Handles and Custom Editors in Unity"
alias: ["/v/3efiobxsurY"]
date: 2019-05-13
featured_image: https://i.ytimg.com/vi/3efiobxsurY/mqdefault.jpg

---

{{% youtube id="3efiobxsurY" %}}

There are a few fun ways to make fantastic Editor tools in Unity for your code. Two of those are `Handles` and `GenericMenu`. They enable you to create interactive components inside the Unity Scene View that allow you to more easily interact with your objects. They work as fantastic solutions for building custom editors. The thing is... I've never really used them. It's time that changed.

Lets explore how these features work and how we might use them for our own projects. How do we draw a custom Handle using Unity's Handle features? How about creating a custom editor with a context menu we can consume? We'll build both to improve the visualization of our custom Graph code from a previous video.

To draw a basic `Handle` you may use `OnSceneGUI`. A sample of what this kind of editor might look like is below. It will draw a yellow line from the center of the scene to the `GameObject`'s position.

```csharp
using UnityEditor;

[CustomEditor(typeof(MyCustomClass))]
public class MyCustomClassEditor: Editor
{
    protected virtual void OnSceneGUI()
    {
        MyCustomClass customClass = (MyCustomClass)target;

        // Safety against selecting a null GameObject
        if (customClass == null)
        {
            return;
        }

        Handles.color = Color.yellow;
        Handles.DrawLine(Vector3.one, customClass.transform.position);
    }
}
```

You may draw a custom `GenericMenu` using something like this. It will create a two option menu that prints out the selected option to the Debug Log.

```csharp
GenericMenu menu = new GenericMenu();
menu.AddItem(new GUIContent("The name of a menu option"), false, () ⇒ { Debug.Log("Picked First Option"); });
menu.AddItem(new GUIContent("The name of a second menu option"), false, () ⇒ { Debug.Log("Picked Second Option"); });

// once you are done, show your menu
menu.ShowAsContext();
```

The documentation for `Handles` is available on Unity's website: https://docs.unity3d.com/ScriptReference/Handles.html

The documentation for `GenericMenu` is also on Unity's site. More info here: https://docs.unity3d.com/ScriptReference/GenericMenu.html

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u