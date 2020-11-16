---
title: "Creating a Triplanar Shader - Asteroids VR"
aliases: [/v/KCKN44-dMOY/]
date: 2017-03-29
featured_image: https://i.ytimg.com/vi/KCKN44-dMOY/mqdefault.jpg

---

{{% youtube id="KCKN44-dMOY" %}}

Asteroid's VR needs a triplanar shader for its asteroids so we're going to make one. Specifically we're going to look at how to handle the projection onto a mesh without using UV's.

A triplanar shader works by creating three planes along each axis in object space (object space is important). Once we have those we want to render our texture on each of the planes. Then, we project those rendered images onto our object using the normal of the object to map things. It helps if you don't normalize your object position's when calculating these things. I learned that the hard way.

In the end that's really all we need to do. The entire shader is based on projecting planes onto your mesh.

Triplanar shaders are really great for texturing terrain, especially height mapped terrain. It helps prevent the normal stretching you'd see with a standard UV based heightmapped terrain. We're going to use it in a similar way, but for our asteroids in Asteroids VR so that we can properly texture the asteroid surface. There are actually a number of really cool things you can do with these shaders. If you've got ideas or use it in your game let me know!