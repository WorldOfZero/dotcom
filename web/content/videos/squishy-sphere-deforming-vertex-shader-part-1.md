---
title: "Squishy Sphere - Deforming Vertex Shader - Part 1"
alias: [/v/VZbCYJZNCQw/]
date: 2016-11-22
featured_image: https://i.ytimg.com/vi/VZbCYJZNCQw/mqdefault.jpg

---

{{% youtube id="VZbCYJZNCQw" %}}

Today we're going to be working with vertex shaders, specifically we're going to be developing what I'm calling Squishy Sphere. A sphere that you can smash against a wall and watch it deform. Sort of a poor mans soft body simulator (but not really).

This is also the first video I've done which digs into vertex shaders and what they do. It's a little expansion beyond what a standard surface shader will offer you. Specifically, a vertex shader lets you (suitably enough) manipulate vertices. This is what we'll be using to squish our cube, but it can also be used for a whole slew of other very cool things. It represents one of the core features of a shader program with the other being the fragment shader which will actually render the image to the screen.

Despite all the cool stuff mentioned in this video, the shader still isn't done. So subscribe to catch Part 2 when that is released later this week and comment with what else you think we should do to explore the power of vertex shaders!

Based upon this Twitter post by Chris Wade: https://twitter.com/chriswade__/status/800454100693450752

Curious about that mention of Barycentric Coordinates? Read more about them here: https://en.wikipedia.org/wiki/Barycentric_coordinate_system

The simple answer if Wikipedia isn't your style is that they are a coordinate system that allows you to interpolate between 3 values with each value representing the weight of the triangles vertex at that point.