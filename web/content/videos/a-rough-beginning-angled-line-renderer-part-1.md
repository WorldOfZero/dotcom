---
title: "A Rough Beginning - Angled Line Renderer - Part 1"
aliases: [/v/y5A-2PTKnn0/]
date: 2017-08-29
featured_image: https://i.ytimg.com/vi/y5A-2PTKnn0/mqdefault.jpg
tags: [ unity3d,debugging ]

---

{{% youtube id="y5A-2PTKnn0" %}}

The first part of two covering how to build a line renderer that only renders lines at 45 degree angles. A script built to automatically calculate and draw lines at forced 45 degree angles similar to how a subway or train map might be drawn.

This turns out to be a bit more trouble than I anticipated. Originally I had planned on releasing this along with the final part as a single video, instead a second part will be released separately and a cut down final version after that. Hopefully that can clean up some of the struggles here...

The basic idea of this approach is to identify the smallest difference between two points.

If the X axis is the smallest difference then the only change in X shall be represented as a 45 degree angle across that X difference.

If the Y axis is the smallest difference the same will happen but across the Y axis.

The remaining space is fixed by tacking on equal lengths to both ends equal to the difference and connecting everything up. Think of it like a 45 degree square connected by two vertical or horizontal lines on opposite corners.

Unfortunately my initial math assumptions do not appear to have worked out. We'll need to poke at this some more. If you see a good way to fix this or I have overlooked something obvious please call it out!

Discord: https://discord.gg/hU5Kq2u