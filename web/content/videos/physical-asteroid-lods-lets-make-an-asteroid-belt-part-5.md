---
title: "Physical Asteroid LODs - Lets Make an Asteroid Belt - Part 5"
date: 2017-02-28
featured_image: https://i.ytimg.com/vi/zZmo0Az0SVg/mqdefault.jpg

---

{{% youtube id="zZmo0Az0SVg" %}}

Time for our asteroids to get physical! In this video we're going to be moving beyond the simple instanced rendering methods we've been using previously and start actually creating real physical asteroids when we get close. This means that asteroids near us will actually be able to physically collide with one another and act in other ways that are for the most part 100% normal. This means we'll have a seamless transition between our instanced renderings and our physical objects and back as they get within range.

To implement this we'll use a second range check similar to how we activate our instanced models. This one won't create or destroy our instanced model though, instead it will replace it while it is near the player. We'll need to transfer the objects speed and more back to ensure this works as expected and the transition is not jarring.

Once everything is up and running we'll have real objects in the range we specify and then fake ones further out. This approach means we are able to render thousands of "physically" simulated asteroids while only needing to pay the price of actually simulating a hundred or so. That's a pretty handy feature.

Next up is creating an object pool so we can store our asteroids without having to constantly thrash our memory by creating, destroying and recreating them. Huzzah for optimization!