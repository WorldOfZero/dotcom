---
title: "Lets Make Conway's Game of Life with Compute Shaders"
aliases: [/v/ItPTBSeGjdM/]
date: 2017-05-17
featured_image: https://i.ytimg.com/vi/ItPTBSeGjdM/mqdefault.jpg

---

{{% youtube id="ItPTBSeGjdM" %}}

Conway's Game of Life was created by John Horton Conway in 1970. It's designed as a mathematical system capable of creating copies of itself. The design of this mathematical "game" uses a simple 2 dimensional rectangle full of living and dead cells. 4 rules determine the next state of the cell based on it's own current state and the state of it's 8 adjacent neighbors.

The rules are:
1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

We're going to attempt to solve this relatively simple problem using a compute shader. We'll model each state of the current problem as a texture and then use the compute shader to calculate the next state.

You can get the source code for this on GitHub if you want to extend it or look at the code yourself. https://github.com/WorldOfZero/UnityVisualizations

Want to learn more about Compute Shaders? I've created an introductory video that looks at what the core components of a compute shader are and how to make one yourself: https://youtu.be/4Wh8GRrz7WA

Music Credits:
Mighty Like Us Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/