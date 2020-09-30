---
title: "A Dynamically Changing Background and a Firm Foundation - Lets Make a Binary Clock - Part 1"
date: 2017-01-10
featured_image: https://i.ytimg.com/vi/c5DcxhTqKjw/mqdefault.jpg

---

{{% youtube id="c5DcxhTqKjw" %}}

Let's make a Binary Clock app for the universal windows platform. By the end of this series we'll have a binary clock we can deploy to an Xbox, Windows Phone, Windows desktop and even a Raspberry Pi or Hololens.

A Binary Clock is a clock, but a bit more geeky. Instead of displaying numbers or an analog display a binary clock shows each digit represented in binary instead. It's a fun and completely geeky way to show the time and that makes it AWESOME!

This video itself won't delve too deeply into the making of a binary clock. Instead we'll work on the secondary feature. A color changing backgroung based on the time as well. This will be a great way to get our feet wet and get things working before we really dive deep.

To accomplish this we'll create a very simple view model with a Color and SolidColorBrush exposed. By setting the color in a separate thread we can modify the brush. Then we can actually apply that brush via a data binding to the background of our page. This will mean that a constantly changing color will result in a constantly changing background for our app. Fun stuff.

In order to accomplish that we'll need to explore some additional features of UWP. This means we'll need to take advantage of a Dispatcher (UI updates MUST happen on the main UI thread or things will break) to schedule updates on the main thread.

Now that we've got our foundation in place let's turn towards the major goals of this application and actually start putting things together. That will start in the next episode. Stay tuned!

Download the source or check it out at your own speed on GitHub: https://github.com/WorldOfZero/BinaryClock