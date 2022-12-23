---
title: "Turning OpenSCAD Files into STL Meshes with GitHub Actions"
aliases: [/v/qdCBG1W6W8w/]
date: 2022-11-28
featured_image: https://i.ytimg.com/vi/qdCBG1W6W8w/mqdefault.jpg
tags: [ git,3d printing ]

---

{{% youtube id="qdCBG1W6W8w" %}}

OpenSCAD is a tool that allows you to program CAD models using its custom programming language rather than dragging and dropping models in an editor. This allows you to define your designs entirely in code that can be compiled into rendered images or 3D models. Let's explore how we can connect that compilation feature to GitHub actions so we can automatically create new models whenever code is edited in our design.

To do this we'll be taking advantage of GitHub Actions and using that to open Pull Requests with the updated models as STL files that we can review and merge into our code. We can take advantage of GitHub's built-in STL viewer in order to preview models directly in any web browser.

Because we are only using features natively included in GitHub we can also use this as a full development loop so we can edit and regenerate models anywhere where we can access GitHub including things like a phone by using tools like http://github.dev/!

If you missed the first video introducing OpenSCAD you can watch that here: https://youtu.be/HxiyUi4RQzw

Get OpenSCAD: https://openscad.org/index.html
OpenSCAD's documentation: https://openscad.org/documentation.html
OpenSCAD on GitHub: https://github.com/openscad/openscad/

You can get a copy of my models and the SCAD files that generate them here: https://github.com/runewake2/scad-examples

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u