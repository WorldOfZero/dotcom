---
title: "Refracting Shield Impacts - Lets Make an Energy Shield - Part 5"
alias: [/v/qCiFHHAEjAM/]
date: 2018-02-15
featured_image: https://i.ytimg.com/vi/qCiFHHAEjAM/mqdefault.jpg

---

{{% youtube id="qCiFHHAEjAM" %}}

It's time to add another layer to our Shield Shader. Projectiles are going to start causing distortions in the shield as they impact it instead of just pulsing a color along the shield.

To accomplish this effect we're going to have to take advantage of the Grab Pass we have been using for our refraction and then calculate some value to shift that captured texture based on how much effect each projectile has on that fragment.

This will allow our shield to bend and warp the space behind it as our spaceships come under fire!

In order to complete this effect we'll have to explore converting between object space, world space and the projection space (what the camera sees). This conversion will allow us to map the calculated difference between our projectile and current position to a space that aligns with what our grab pass texture contains.

The source code for the Energy Shield and other visual effects can be found here: https://github.com/WorldOfZero/UnityVisualizations

Join the World of Zero Discord server. We don't have cookies, but we have a bunch of people with really cool projects: https://discord.gg/hU5Kq2u