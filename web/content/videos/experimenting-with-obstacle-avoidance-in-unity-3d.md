---
title: "Experimenting with Obstacle Avoidance in Unity 3D"
aliases: [/v/SVazwHyfB7g/]
date: 2020-09-23
featured_image: https://i.ytimg.com/vi/SVazwHyfB7g/mqdefault.jpg

---

{{% youtube id="SVazwHyfB7g" %}}

Lets explore building a self steering ship that can automatically move out of the way of obstacles in it's path. This is a form of steering algorithm which is used to steer a object towards in objective, in our case we'll be using it for obstacle avoidance.

This approach works by casting a number of rays in front of the ship which can detect obstacles in the way. Each ray provides a portion of the force in it's direction, when the ray detects an obstacle the force it would apply is reversed.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u