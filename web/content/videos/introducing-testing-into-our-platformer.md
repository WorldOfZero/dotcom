---
title: "Introducing Testing into our Platformer"
alias: ["/v/MVllsatsW5A"]
date: 2020-03-24
featured_image: https://i.ytimg.com/vi/MVllsatsW5A/mqdefault.jpg

---

{{% youtube id="MVllsatsW5A" %}}

Previously we had looked into providing an [abstraction layer](https://youtu.be/emzftWxwS1c) over our character controller to allow us to build modular pieces instead of a single monolithic character controller. In this video we'll take advantage of that design to add NUnit tests over our basic character controller. This should help allow us to validate the behavior of our character controller and ensure future changes do not negatively impact the stability of our game.

Unity includes NUnit testing already - a framework I am not familiar with - we'll be exploring how to setup some basic tests, build out a few custom Mocks for our classes and test the basic top down controller we had previously built. At the end of this we'll have test coverage over the movement action of our character controller that allows us to validate our player moving.

This video is specifically looking at unit tests, integration and end-to-end tests are larger more complex problems that I'm not sure how we want to cover yet.

More NUnit documentation is available on GitHub: https://github.com/nunit/docs/wiki/NUnit-Documentation

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u