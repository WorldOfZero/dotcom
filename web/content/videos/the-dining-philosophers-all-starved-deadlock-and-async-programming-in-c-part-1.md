---
title: "The Dining Philosophers All Starved - Deadlock and Async Programming in C# - Part 1"
aliases: [/v/c99S9vkuN24/]
date: 2016-11-26
featured_image: https://i.ytimg.com/vi/c99S9vkuN24/mqdefault.jpg

---

{{% youtube id="c99S9vkuN24" %}}

Today we're going to be exploring C#'s Async and Await functions. To do that we're going to be solving one of the classical concurrent programming problems. A problem thought up by one of Computer Science's greats Edsger Dijkstra in 1965. We're going to be exploring the Dining Philosophers problem.

Specifically in this video we'll be exploring what can happen when you get things wrong and cause a deadlock. A state in your program where different parts are waiting for other input that will never arrive. This naive and frankly well... wrong... solution to the Dining Philosophers problem highlights one of the dangers of concurrent programming. "It works on my machine" becomes a real issue because with these kinds of errors you might actually be right.

So, we're going to bust the problem open and solve it incorrectly. But there is a point here. Once we know how not to solve it we can solve it right and what exactly that right answer looks like remains to be seen until the next video when we actually solve this problem. That doesn't mean there is no point here. Hopefully this video highlights the dangers of deadlock and why debugging and solving it can be difficult.