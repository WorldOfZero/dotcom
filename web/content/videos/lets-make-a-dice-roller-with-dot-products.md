---
title: "Lets Make a Dice Roller with Dot Products"
aliases: [/v/hmDF9PvMDVw/]
date: 2017-05-24
featured_image: https://i.ytimg.com/vi/hmDF9PvMDVw/mqdefault.jpg

---

{{% youtube id="hmDF9PvMDVw" %}}

Dot products are extremely useful for a whole number of tasks. In this video we're going to look at applying them in a way that will allow us to detect which side of a dice is facing up. This will allow us to use rigidbodies to simulate rolling a dice and get the result no matter what the shape of the dice. We can simulate a d20, d6, even a coin flip with this technique.

Dot Products are a mathematical function that returns a value based on a the alignment of two vectors. Two normalized vectors parallel to themselves and heading in the same direction give a dot product of 1. Perpendicular normalized vectors give a 0 and parallel vectors in opposing directions result in -1. The actual value is related to the inverse cosine of the angle difference between the two.

Hint: The Arccos(X) where X is the dot product of two normalized vectors returns the angle between the two vectors. We don't use this here, but it's a pretty neat trick!

Our solution creates a list of vectors in local object space that determine which direction the sides are facing. Once we have that we translate each vector from local space to world space using the Dice's Transformation Matrix (localToWorldMatrix). This gives us a vector for each side in world space. Now that we have that we can determine which of the vectors has the greatest dot product when compared against the tables up direction (Vector3.up). That vector is our currently selected dice side.

You can get the dice roller script on GitHub here: https://gist.github.com/runewake2/e3d04d1faf6c50c11ece63c776a2840c


For more complex dice than a d6 you might want to automate determining the sides of your dice. I've put together an example of how you might do that here: https://youtu.be/0Rnj7YQJfrc


Probuilder is a great way to create levels or other basic geometry. It's available for both Unreal Engine and Unity 3D and has a free version. Learn more here: http://www.procore3d.com/probuilder/