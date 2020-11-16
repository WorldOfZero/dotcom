---
title: "Simulating Grass Physics and Trampling in Compute Shaders"
aliases: [/v/gF1LZNOUb9w/]
date: 2017-06-27
featured_image: https://i.ytimg.com/vi/gF1LZNOUb9w/mqdefault.jpg

---

{{% youtube id="gF1LZNOUb9w" %}}

Adding a custom physics implementation to our grass renderer. This video adds a compute shader to simulate our grass individually. Specifically we'll be looking at trampling simulation and recovery from that. This will allow us to mark mark grass as "tilted" in some way and then simulate that location every frame to simulate recovery of the grass over time. A second map is used to control how fast the grass recovers (being driven over by a car will might take longer than sneaking across it for example).

This solution works by storing the direction of our grass in a render texture, a solution we created last episode. The difference here is that the texture we are using is no longer static! Instead a compute shader calculates new directions for our grass periodically as part of our games Fixed Update. This slowly smooths the direction of the grass towards the target point over time. A smooth animation all physically simulated!

After that is working we'll add another basic texture to control the springiness of the grass - how quickly it recovers. This map can be used to make a noticeable difference in how heavy and light objects interact with the grass and can even be used to make permanent paths through it!


One note: this video uses Lerp to simulate physics. That's not correct. Slerp is the correct operation for rotational interpolation. Lerp will be a direct translation between the two, however Slerp will rotate a vector towards the new direction.