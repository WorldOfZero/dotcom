---
title: "Building Boids in Unity 3D"
aliases: [/v/_d8M3Y-hiUs/]
date: 2020-01-22
featured_image: https://i.ytimg.com/vi/_d8M3Y-hiUs/mqdefault.jpg

---

{{% youtube id="_d8M3Y-hiUs" %}}

Boids are a type of basic AI that can simulate the flocking movement of birds using a few simple rules:

1. Boids should attempt to match the velocity of nearby other boids.
2. Boids should avoid crowding other boids.
3. Boids should move towards the center of mass of other nearby boids.

In this video we're going to a look at implementing a basic group of unoptimized boids based on those rules. To do this we'll use different Unity `MonoBehavior`'s to represent each of the different rules and then have a fourth component which keeps track of the state of the Boid itself (tracking it's velocity and moving it in the scene). Because we're just adding components to inject each of the rules into our Boid's we can actually continue to add more and more behaviors to them simply by adding more components - we'll look at introducing a fourth behavior that tries to keep the boids within a fixed sphere to prevent them flying off into the horizon.

Like I mentioned, this initial implementation is not optimized and has some pretty glaring problems as far as efficiency goes. Now that we have a working implementation though we can revisit those problems and address them as needed.

The references I based this off of:
- https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/modeling-natural-systems/boids.html
- http://www.vergenet.net/~conrad/boids/

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u