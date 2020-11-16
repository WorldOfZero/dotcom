---
title: "Magic Missile! Creating Seeking Projectiles"
alias: [/v/O6u92arDKUA/]
date: 2017-08-14
featured_image: https://i.ytimg.com/vi/O6u92arDKUA/mqdefault.jpg

---

{{% youtube id="O6u92arDKUA" %}}

Augmenting our magic missiles with a bit of corrective flight. This video focuses on how to get a projectile to target and steer towards a target using a combination of dot products for finding the target and a steering algorithm to actually turn the projectile. We also create a custom cone gizmo for debugging these features using some basic translation matrix math.

In addition to actually implementing a seeking projectile we discuss the difference between a spherical (SLERP) and linear (LERP) interpolation and when you'd use both of them.

Slerp stands for spherical linear interpolation, a way to interpolate between two rotational vectors by calculating a path along the surface of a sphere.

More information about working with the SLERP function and what is happening behind the scenes can be found on the Wikipedia page here: https://en.wikipedia.org/wiki/Slerp

Discord: https://discord.gg/hU5Kq2u