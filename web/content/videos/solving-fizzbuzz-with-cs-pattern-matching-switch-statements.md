---
title: "Solving FizzBuzz with C#'s Pattern Matching Switch Statements"
date: 2020-03-31
featured_image: https://i.ytimg.com/vi/68ko-chyM2E/mqdefault.jpg

---

{{% youtube id="68ko-chyM2E" %}}

Pattern Matching was introduced into C# a few years ago and I've not really been able to integrate it into my projects. I wanted to explore the feature a bit more by solving Fizz Buzz. I figured we could learn about it together. 😃

FizzBuzz is a common interview question that covers order of operations, conditionals and loops in the language of your choice. In this video, we'll be replacing the more commonly used `if` statements with a pattern matching switch expression.

The rules of FizzBuzz are:

Iterate over a series of integers.

* If the number is divisible by 3 print "Fizz"
* If the number is divisible by 5 print "Buzz"
* If the number is divisible by 3 **and** 5 print "FizzBuzz"
* Otherwise print the number to the console

For example if we provide 9 we should print "Fizz because 9 can be evenly divided by 3 with no remainder. If we provide 10 we should print "Buzz" because 10 is divisible by 5. If we provide 15 we should print "FizzBuzz" because it is divisible by both 3 and 5.

This is the code from the video (The greater-than and less-than symbols may need to be replaced. YouTube does not support them natively.)

```
class Program
{
    static void Main(string[] args)
    {
        for(int i = 0; i ˂ 20; ++i) {
            Console.WriteLine(GetOutputString(i));
        }
    }

    static string GetOutputString(int i) {
        return (i%3, i%5) switch
        {
            (0, 0) =˃ "FizzBuzz",
            (0, _) =˃ "Fizz",
            (_, 0) =˃ "Buzz",
            _ =˃ i.ToString()
        };
    }
}
```

Here are some additional examples and tutorials on using pattern-matching in C#: https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/pattern-matching

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u