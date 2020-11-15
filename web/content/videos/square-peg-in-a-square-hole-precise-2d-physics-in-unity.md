---
title: "Square Peg in a Square Hole - Precise 2D Physics in Unity"
date: 2016-11-05
featured_image: https://i.ytimg.com/vi/yZ78Ey6RqRo/mqdefault.jpg

---

{{% youtube id="yZ78Ey6RqRo" %}}

One of the problem's with games is that unlike real life things don't happen all the time. They happen in frames. This creates all kinds of problems. One of them is that physics gets a little difficult. Specifically if you try to move a box over a hole that it would normally fall into unless we get particularly lucky it won't fall into that and will just ignore it. In this video we're going to try to solve that problem.

To do that we're going to be using standard unity 2D Rigidbodies and Raycasts. Specifically the solution is to fire a ray backwards and downwards from the center bottom of the box. If that ray's length is longer than half the width of our cube then we know that our box is over a gap. This means we can do some minor manual correction to our box in order to get it to fall into the hole. With this solution we can get boxes to fall directly into identically sized holes. Huzzah!

Check out the component we developed to solve this problem on GitHub: https://gist.github.com/runewake2/d50a4c4825f7853c947516bc59d44fb6

This video includes art from the Dungeon Level Kit asset. You can get it from the Unity Asset Store here: https://www.assetstore.unity3d.com/en/#!/content/35681

This project is built for Unity which is free and available here: https://unity3d.com