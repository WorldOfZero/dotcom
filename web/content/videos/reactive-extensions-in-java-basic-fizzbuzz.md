---
title: "Reactive Extensions in Java - Basic FizzBuzz"
aliases: [/v/ZTqIg-Fk2n4/]
date: 2017-06-21
featured_image: https://i.ytimg.com/vi/ZTqIg-Fk2n4/mqdefault.jpg
tags: [ java,tutorial ]

---

{{% youtube id="ZTqIg-Fk2n4" %}}

Reactive Extensions use asynchronous observable streams to control your program. That sounds complicated, and it is, but the possibilities this style of programming unlock are fantastic.

Reactive Extensions introduces two core concepts, the Observable is a stream that has some data that can be read by Observers. These observers react to the data introduced to the Observables. At the surface this sounds like basic stuff, but it enables some really cool designs. Programs can be constructed around the flow of data and designed to immediately react to new information in complex ways.

More interesting is this style of implementation completely removes the need for parts of your program to need to communicate, instead the Observable streams serve as proxies between the two. Hiding the implementations on either side from one another. That's a really powerful feature that improves the API designs of your programs and makes working with them significantly easier.

Learn more about reactive extensions and what you can do with them on the project website: http://reactivex.io

Or check out the GitHub projects to get started! https://github.com/ReactiveX