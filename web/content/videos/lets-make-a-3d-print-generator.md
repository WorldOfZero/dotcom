---
title: "Lets Make a 3D Print Generator"
aliases: [/v/M6nHIAK83vQ/]
date: 2017-05-31
featured_image: https://i.ytimg.com/vi/M6nHIAK83vQ/mqdefault.jpg

---

{{% youtube id="M6nHIAK83vQ" %}}

3D Printers are cool. Neater still the tech that drives them isn't nearly as complex as it might seem.

In order to begin a 3D Print you need something to print. In this case a 3D object. That's easy enough. But what if you don't have a 3D modelling program or designing your model isn't easy by normal modeling practices. What if you want to build the file from scratch?

That's what we're going to work on in this video. Starting from a simple .NET Core application we're going to begin building a full STL File Generator. You can read more about what the file format looks like here: https://en.wikipedia.org/wiki/STL_(file_format)

We're specifically going to be focusing on the ASCII STL file format which uses ASCII encoding to represent complex 3D models. Once generated these 3D files can be imported into most 3D printing software including CURA and 3D Builder and printed. That's exactly what we're going to do here, we'll generate a simple cube, import that model into CURA and send it to a printer. Shortly after that we'll have a real object based on our original model. That's pretty cool!

Want to play with this code yourself? Check it out on GitHub! https://github.com/WorldOfZero/STLBuilder

Since I'm sure someone will ask here is the printer I use: http://amzn.to/2qIKLgi. It's a Qidi X-One. My own tiny builder majigy!

Music Credits:
"Bit Quest" Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/