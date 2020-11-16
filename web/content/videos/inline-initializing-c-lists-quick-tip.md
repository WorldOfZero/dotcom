---
title: "Inline Initializing C# Lists - Quick Tip"
aliases: [/v/F11BhVjmyd0/]
date: 2019-02-08
featured_image: https://i.ytimg.com/vi/F11BhVjmyd0/mqdefault.jpg

---

{{% youtube id="F11BhVjmyd0" %}}

C# includes a method for initializing Lists that means you do not need to repeatedly `Add("foo")` throughout your code. This allows you to specify a set of items immediately after the Lists constructor that causes the items to be sequentially added to the list after its created for you. This works for most collection types including Arrays and Lists.

Here's an example of what constructing a list like this might look like.

```csharp
// Note: replace angled brackets with correct character!
var myList = new List⟨string⟩() { "this", "is", "a", "test" };
```

Doing this traditionally would look like this:

```csharp
// Note: replace angled brackets with correct character!
var myList = new List⟨string⟩();
myList.Add("this");
myList.Add("is");
myList.Add("a");
myList.Add("test");
```

This trick also works with Dictionary's! Here's how: https://youtu.be/lFsgmxzw7IU

Join the World of Zero Discord server: https://discord.gg/hU5Kq2u