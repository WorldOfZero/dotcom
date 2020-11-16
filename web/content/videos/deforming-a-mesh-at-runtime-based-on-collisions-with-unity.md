---
title: "Deforming a Mesh at Runtime Based on Collisions with Unity"
alias: ["/v/l_2uGpjBMl4"]
date: 2016-12-20
featured_image: https://i.ytimg.com/vi/l_2uGpjBMl4/mqdefault.jpg

---

{{% youtube id="l_2uGpjBMl4" %}}

Time to start working on deforming our dynamically generated mesh. We're going to be working on a physical simulation that deforms the mesh when things hit it. The advantage to this is that we will be able to modify our mesh as objects impact it causing them to make dents when they hit it or lines as they are dragged across it.

For reference we're going to be using the snow simulated in Tomb Raider which deforms as your feet drag through it. We aren't to the human interacting with it stage yet but that's what we're building towards. For now we're going to stay simple and basic. Either a mesh is deformed or not and each physics collision causes  the mesh to be deformed.

This will require modifications to our mesh being sent in realtime back to the Mesh to render. To do that we'll maintain two in memory array lists. One to store the original position so we can maintain the mesh data and track how much a vertex has changed and the second will be used to track the current vertices of the mesh - the manipulated vertices - which will be used for actually rendering our mesh.

The MeshDeformer code can be found on GitHub: https://gist.github.com/runewake2/a6ba641c9c9c51da62530d6176ee932e

The PhysicsDeformer code is available on GitHub and you can get it here: https://gist.github.com/runewake2/2256a3d77724e3606743d7f07f734280