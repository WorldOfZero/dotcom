---
title: "Rendering a Dynamic Rope with Unity's Line Renderer"
alias: ["/v/ej5mt4v9UKs"]
date: 2016-12-08
featured_image: https://i.ytimg.com/vi/ej5mt4v9UKs/mqdefault.jpg

---

{{% youtube id="ej5mt4v9UKs" %}}

Extending where we left our rope simulation it's time to dive into the new LineRenderer added to Unity 5.5. Admittadely it looks a lot like the old LineRenderer but with some extra cool new features. We can tweak the size of it dynamically over time, round the corners and the vertex layout, in general is just better than it was in the older version.

We are going to be writing a quick script that will dynamically update our LineRenderer's positions list so that it matches a list of Transforms. This means we can hook it up to our rope simulation from our last video and get a dynamic rope. It'll be simple, quick and relatively straight forward. More importantly it'll be fun and is a key componenet to getting our final grappling hook mechanic working.

There is also a quick defect fix we need to make. Our projectiles are flying through the colliders. We'll fix that bug as well. Not to big of a deal, just quick house cleaning stuff.

Check out the code for Asteroid's VR on GitHub: https://github.com/WorldOfZero/Jet-Warrior