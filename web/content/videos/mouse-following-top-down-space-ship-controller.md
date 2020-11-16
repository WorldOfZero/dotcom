---
title: "Mouse Following Top-Down Space Ship Controller"
alias: [/v/yOnth9uTLlA/]
date: 2019-03-25
featured_image: https://i.ytimg.com/vi/yOnth9uTLlA/mqdefault.jpg

---

{{% youtube id="yOnth9uTLlA" %}}

Lets make a top down controller that plays a bit more nicely with the mouse. This will allow us to direct our ship by having it move towards the mouse instead of requiring the controller or keyboard input we have required up to this point. While this control scheme doesn't fit every type of game, it can be a strong alternative way to control your characters in other projects.

In order to follow the mouse we'll need to get a point in world space that represents where our mouse is. To get this point there are two options we'll consider:

1. Use some algebra to calculate the point in space where our ray will intersect with a specific point on the ground (this only works for directly top down projects).

2. Or raycast onto some sort of invisible surface like a plane.

We'll explore the first option here. This is done by using the Camera's `ScreenPointToRay` function to get a ray from our camera that we can use to calculate the actual position of the mouse. ScreenPointToRay will provide us with a ray that has a direction and position. For the most part we care about the direction of the ray.

Our function to turn this into a world space position works by using some algebra to derive how many "steps" of the ray it will take to intersect with the ground plane (0 on the y axis). This can be done by dividing the height of the camera by the rays y length. Once we know how many steps of the ray we need to reach the ground we can multiply the rays x and z lengths by that value and add it to the cameras current position to get a result. This resulting value is where our ray passes through the ground plane in world space. It's the point we want our ship to fly towards.

To turn that into a direction we are able to compare the player ships position to this new calculated position of the mouse to get a vector that we can plug into the rest of our script. The end result is a ship that flies towards the mouse. It's pretty neat!

Grab the source code for the complete series on GitHub: https://github.com/WorldOfZero/top-down-spaceship

Join The World of Zero Discord Channel: https://discord.gg/hU5Kq2u