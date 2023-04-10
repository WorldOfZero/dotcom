---
title: "An Intro to Json Serialization and Deserialization in Unity"
aliases: [/v/3F4HjM_5hZY/]
date: 2023-04-09
featured_image: https://i.ytimg.com/vi/3F4HjM_5hZY/mqdefault.jpg
tags: [ unity3d,csharp,dotnet ]

---

{{% youtube id="3F4HjM_5hZY" %}}

JSON is a common data format that stores data in human-readable strings that can be interpreted by computers. This makes it possible for you and other people to read and modify the raw data and pass that information along to internal systems for use. JSON is commonly used across the web and other places and has native support built in to Unity using JSON.NET. In this video we're going to walk through an introduction into how to serialize and deserialize JSON objects in Unity so you can quickly store configurable information about your games in a standard open format.

* `JsonConvert.SerializeObject()`: Serializing object's converts a C# object's data into a string so you can store and pass that information along to other systems. Passing in a class will return a string of the data serialized into a JSON format. You can read that data back out using `DeserializeObject`.
* `JsonConvert.DeserializeObject()`: Deserializing object's requires two parameters. The class you want to deserialize the data into and the JSON formatted string you want to deserialize. This method will automatically attempt to convert the provided string into a new instance of the target class and return that class back to you to use. After you've modified data you can write the information back to a JSON string with `SerializeObject`.

When working with strings that span multiple lines there are two Attributes you can add.

* [`MultilineAttribute`](https://docs.unity3d.com/ScriptReference/MultilineAttribute.html): Multiline strings expand the normal textbox a fixed number of vertical lines. This is less flexible than a `TextArea` but can still be useful in some situations.
* [`TextArea`](https://docs.unity3d.com/ScriptReference/TextAreaAttribute.html): Text Area's span between a minimum and maximum number of lines and - unlike a `Multiline` attribute - they will add scrollbars if the text exceeds the maximum number of lines. Additionally the `TextArea` spans the entire width of the Inspector giving more room to type.

The JSON.NET documentation is available here: https://www.newtonsoft.com/json/help/html/Introduction.htm

***

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u