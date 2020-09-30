---
title: "UWP Data Converters - Lets Make a Binary Clock- Part 5"
date: 2017-01-17
featured_image: https://i.ytimg.com/vi/hqq8TS7QbgI/mqdefault.jpg

---

{{% youtube id="hqq8TS7QbgI" %}}

Let's clean up things a bit. This video doesn't focus on adding new features to our application but enhancing the ones we already have. We'll be working on moving the code needed to render a time in our application from the controller of our application to a new ValueConverter component we'll be designing. This will automatically turn the time we use in our controller into the format needed by our view for rendering.

Think of this as reducing technical debt and making our application easier to maintain and enhance in the future. It doesn't change what our end users will see, but it does change how well we can implement the new features we need. This is an essential part of software development and one of the major considerations all projects should have: how do we make something cool and keep it cool over the life of the project? How do we maintain this thing? The goal is to answer those questions.

In this case the answer to the question is abstraction via an IValueConverter which will do similar logic to what our controller was doing but it will just be in a different place. Our view model now only knows about the current DateTime and has no concept of formatting the data to be viewed. The new converter handles that by converting that DateTime object into a usable list of lists of booleans - the data we'll be displaying in our view. This prevents our application controller from having to understand or even consider how the data it presents will be viewed and in return prevents our application view from needing to know anything about how the application is functioning. Both just operate on a shared DateTime object with very different interactions with it.

Download the code and play with it yourself! The code is open source on GitHub: https://github.com/WorldOfZero/BinaryClock