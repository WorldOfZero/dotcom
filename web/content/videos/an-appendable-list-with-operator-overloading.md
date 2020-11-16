---
title: "An Appendable List with Operator Overloading"
alias: [/v/vavFf1Qiz20/]
date: 2020-04-06
featured_image: https://i.ytimg.com/vi/vavFf1Qiz20/mqdefault.jpg

---

{{% youtube id="vavFf1Qiz20" %}}

C# supports operator overloading as a language feature. This enables you to modify the behavior of a variety of operators in your classes. Operators like `+`, `-`, `*`, `!` etc. In this video we're going to be modifying a LinkedList to support two new operators `+` and `-` so we can add or remove objects from our list using code that looks like:

```csharp
list += object;
list += object2;
list -= object;
```

Hopefully this creates a handy shorthand for modifying our lists. Mostly though it's intended to show off the ability to modify these operators in the first place 😄.

The `AppendableList` class looks like this:

```csharp
class AppendableList : LinkedList
{
    public static AppendableList operator +(AppendableList source, T obj) {
        source.AddLast(obj);
        return source;
    }

    public static AppendableList operator -(AppendableList source, T obj) {
        source.Remove(obj);
        return source;
    }
}
```

*Note: YouTube does not support angled brackets. I've had to remove the generic arguments as a result. You'll need to add them back before using this.*

I've also made a slightly less useful implementation of operator overloads that overloads the greater than and less than operations to append or prepend strings together. It's not quite as useful as an `AppendableList` but if you want to dive deeper into this feature it can be another resource. https://youtu.be/yhzBaeroj2o

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u