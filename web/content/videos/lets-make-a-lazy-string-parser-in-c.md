---
title: "Let's Make a Lazy String Parser in C#"
aliases: [/v/pauxOqYU038/]
date: 2021-04-21
featured_image: https://i.ytimg.com/vi/pauxOqYU038/mqdefault.jpg
tags: [ csharp,dotnet,livecode,tutorial ]

---

{{% youtube id="pauxOqYU038" %}}

Let's create a quick string parsing script that can read a long string and return a delimited set of results (we'll be finding words). We can use this to iterate through every word in the string until we find the value we are looking for without having to pre-process the entire original string.

A lazily evaluated function is one that calculates the results of the function as the values are requested. In this case it means we can create a set of integers or strings that we generate dynamically without having to first fill an array or other data structure with all the data first. This also means that for large data sets where we will stop iterating early in the list that we can process only parts of the provided data.

C#'s `yield` keyword allows us to return a value from a function and then continue from that point in our code on the next iteration. This allows us to iterate through a loop and `yield` results from the inside of the loop to expose new data to the calling function before generating the complete list. Instead, our list is generated procedurally from the code in our function.

Using `yield` we can generate a lazily calculated set of values from an infinite loop.

```csharp
public static IEnumerable<int> PositiveIntegers() {
    for(int i = 1; i < int.MaxValue; ++i) {
        yield return i;
    }
}

// We can print the first ten elements in the set of positive integers without
// looping through the complete set of integers.
public static void Main(string[] args) {
    foreach(var number in PositiveIntegers().Take(10)) {
        Console.WriteLine(number);
    }
}
```

To create our lazy string parser we'll use the concepts above but introduce a few extra steps. We're going to step through an input string character by character to form words. When a delimiter character is found we'll yield the word we've found so far and then reset that word. When the next word is queried from the `IEnumerable` we'll repeat the process. This will keep going until we stop iterating over the `IEnumerable` result of the function or we reach the end of the function.

Our lazy string parser implementation looks like this:

```csharp
public static IEnumerable<string> Parse(string content, char delimiter) {
    var word = String.Empty;
    foreach(var character in content) {
        if (character == delimiter) {
            if (word != String.Empty) {
                var result = word;
                word = String.Empty;
                yield return result;
            }
        } else {
            word += character;
        }
    }
    yield return word;
}
```

***

Learn more about using `yield` with more examples in this video: https://www.youtube.com/watch?v=bsZjfuTrPSA
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u

***

The thumbnail of this video includes a modified image of [Duke Humfrey's Library](https://commons.wikimedia.org/wiki/File:Duke_Humfrey's_Library_Interior_3,_Bodleian_Library,_Oxford,_UK_-_Diliff.jpg). This file is licensed under the [Creative Commons Attribution-Share Alike 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/deed.en) license.