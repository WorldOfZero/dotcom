---
title: "Making the Clock Tick - Lets Make a Binary Clock - Part 4"
alias: ["/v/z1K37aEjI4k"]
date: 2017-01-15
featured_image: https://i.ytimg.com/vi/z1K37aEjI4k/mqdefault.jpg

---

{{% youtube id="z1K37aEjI4k" %}}

Let's make our binary clock tick! In this video we're going to put the pieces we've developed over the previous episodes together and actually make our clock. By the end of this we'll have a fully functioning binary clock. Granted it still needs some UI tweaks before it's totally ready to ship but we're getting there. At least it will count.

To do that we'll implement a DispatcherTimer which we'll use to trigger an update every second so our clock stays correct. A DispatcherTimer fires off a "Tick" periodically as a C# event which occurs on the UI thread. This allows us to do UI updates periodically. Think of it as a better solution to our previous duct taped solution using a Task and Task.Delay(). This solution is better and also simpler to write. All good in my book!

After that it's just a quick modification of our UI and View Model to get all our new data exposed as well as some quick arithmetic to convert our hours, minutes and seconds to their component digits. Once that's done our binary clock is ready to fly. Or... at the very least... count.

Check out the code on GitHub and play with it yourself: https://github.com/WorldOfZero/BinaryClock