---
title: "Drawing Lines With The Mouse in Unity"
date: 2018-02-21
featured_image: https://i.ytimg.com/vi/km_kU-j7mcw/mqdefault.jpg

---

{{% youtube id="km_kU-j7mcw" %}}

Lets explore drawing lines using the mouse in Unity. We'll approach this in two parts. The first is to figure out how to cast a line from our camera where our mouse is. In other words we need to take the Screen Space mouse cursor and project it back into World Space. Once we have that we can collect a point when the mouse is pressed and released, connect them and create a LineRenderer that connects them. By approaching the problem this way we don't need to do any extra steps like creating a prefab template for the line renderer. A single script powers everything.

In order to calculate the points in space we can use Unity's build in Camera.ScreenPointToRay function to turn a point on the screen into a Ray with world position and direction so we can project it into world space at a fixed distance.

Try integrating this with the Bezier Curve's we built: https://youtu.be/tgCFzoG_BJM

Or integrate it with our GL.Lines code to draw Gizmo like lines: https://youtu.be/s926MfazI50

Check out the World of Zero Discord server: https://discord.gg/hU5Kq2u