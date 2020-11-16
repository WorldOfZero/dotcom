---
title: "Better Projectiles with Gravity and Trajectory Prediction"
aliases: [/v/d7pwmO6IS2I/]
date: 2017-09-12
featured_image: https://i.ytimg.com/vi/d7pwmO6IS2I/mqdefault.jpg

---

{{% youtube id="d7pwmO6IS2I" %}}

A lot of  the time projectiles are simulated using either Raycasts or some complex Rigidbody style collision detection. This works for most basic projectiles but what if we want realistic projectiles that can be effected by things like wind or gravity? How would we both simulate these and predict their path? Today we're going to take a  look at that problem!

This solution uses a combination of a raycast projectile as well as a physics pass to apply gravity mid flight. Additionally it introduces sub-frame simulations that allow the projectile to arc over the course of a frame instead of simply drawing a line from the start of the frame to the new position at the end of it.

We'll look at how to simulate the projected path using Gizmo's and then expand on that solution using raycasts to create the final solution.

Want to take this even further? There is a fantastic tutorial series on Habrador.com that discusses realistic bullets in Unity in more depth: http://www.habrador.com/tutorials/unity-realistic-bullets/

Thumbnail Source image credits and License:
By Niels Noordhoek (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons

The Thumbnail for this video may be used or modified per the Creative Common Share Alike 3.0 License (see link above).

Discord: https://discord.gg/hU5Kq2u