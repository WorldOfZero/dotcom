---
title: "Building a UWP User Control - Lets Make a Binary Clock - Part 2"
alias: ["/v/VJRfipP9o9w"]
date: 2017-01-11
featured_image: https://i.ytimg.com/vi/VJRfipP9o9w/mqdefault.jpg

---

{{% youtube id="VJRfipP9o9w" %}}

Picking our Binary Clock back up we're going to be working on creating a custom user control which can display a set of bits as colored rectangles. We'll be using this eventually to display each individual digit for our final clock implementation. This will require us to dig into how to build a user control and add dependency properties to it as well as how to use Value Converters.

The actual solution to this problem isn't particularly hard. It's simply the creation of a new UI component to represent what we need. The implementation though. That gets a bit tricky.

We'll cover:
- How to use dependency properties and what they are good for.
- What Converters are and how to use them to convert boolean data into a brush we can use to color our controls.
- C# Partial Classes and how XAML takes advantage of them.
- And we'll explore data binding in a bit more depth.

There is more to come as well. We are getting close to completing the initial implementation of the clock!

Check out the source code and use it yourself here: https://github.com/WorldOfZero/BinaryClock