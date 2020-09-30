---
title: "Rigidbody Top-Down Spaceship Controller"
date: 2019-03-06
featured_image: https://i.ytimg.com/vi/8-UBALp1xQc/mqdefault.jpg

---

{{% youtube id="8-UBALp1xQc" %}}

We have a spaceship that can fly around, but we have a problem. It can fly through things. Lets fix that by changing our current transformation modification into physical forces on a rigidbody! This will allow us to apply force or torque to our ship instead of directly working with the vector positions and rotations. Interestingly, because of the way we've put our ship controller together so far doing this isn't too hard.

In the past we've developed three methods of moving our Spaceship controller by modifying the transform. This video will take a look at each one of those and change the logic so that each of them can operate on a rigidbody instead. This will allow our spaceship controller to interact with Unity's Physics system so velocity and angular momentum are used instead of immediate frame-by-frame movement. It also means our ship will actually hit other objects in the world which means it can no longer fly through them. Colliding with a planet for example will cause the ship to stop and potentially apply additional forces to our ship.

Source Code for this series is available on GitHub: https://github.com/WorldOfZero/top-down-spaceship

The World of Zero Discord Channel: https://discord.gg/hU5Kq2u