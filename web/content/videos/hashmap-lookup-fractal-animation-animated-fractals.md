---
title: "Hashmap Lookup Fractal Animation - Animated Fractals"
date: 2016-12-06
featured_image: https://i.ytimg.com/vi/HF3hO5LTWw8/mqdefault.jpg

---

{{% youtube id="HF3hO5LTWw8" %}}

The last time we explored animating our Fractal Shader we had a problem. Our code was not elegant and was very difficult to keep updated. We needed to directly our publishers and animators together. When things get complicated that scales to be even more complex and therefore not really that useful for us. We're going to fix that!

To do that, we're going to associate things with keys. Publishers publish events to animators which share the same key as them. This video will explore two ways of accomplishing that. The first uses brute force and is less flexible. We'll grab all animators that exist on an object at the beginning of the scene and then identify all of them which have the same key as the publisher. The publisher will save the list of those animators and then publish to each of them specifically. This is cool and works well. But it stops working if we ever want to dynamically change things.

If we want to support that we'll need something better. That is where our second solution comes into play. This solution uses a component which lies between our Publishers and Animators which we'll call the AnimationController. The AnimationController will maintain a list of Animators that have subscribed to certain keys. This means that our publishers can lookup the animators attached to whatever event they want to publish in real time. This solves the problem of updating events at runtime.

The solution here requires the use of a HashMap (A Dictionary in C#) which does introduce some additional memory overhead. However, unlike iterating over a list to identify all matching items. A hashmap provides us with the ability to lookup in best case constant time the list of Animators subscribed to our Publishers. This takes our best case of O(N) down to best case O(1) for our lookups! That's a pretty great improvement overall! The only issue with this is the overhead required in order to actually implement this solution. It does require quite a bit of extra work that a simple list wouldn't need. It'll be fun!

Play around with the code by grabbing the source code from GitHub: https://github.com/WorldOfZero/FractalGenerator

Lets explore simulating a crazy gravity model  ▶  https://www.youtube.com/watch?v=ycsnrmh_7Qg

Lets setup a CI/CD pipeline for C#  ▶  https://www.youtube.com/watch?v=w2gb5yGsuIg

Lets code without a keyboard using Google Blockly  ▶  https://www.youtube.com/watch?v=XpfN_rN9gZM