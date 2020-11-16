---
title: "Calculating Dice Sides From A Mesh's Normals"
alias: ["/v/0Rnj7YQJfrc"]
date: 2020-01-21
featured_image: https://i.ytimg.com/vi/0Rnj7YQJfrc/mqdefault.jpg

---

{{% youtube id="0Rnj7YQJfrc" %}}

Today I wanted to take a closer look at an older video where we built a dice roller that used Dot Products to determine which face on a dice was rolled. The problem with that original solution was that you would need to manually enter each of the dices vertices to get an accurate result. That's easy enough with a 6 sided dice, but becomes extremely annoying and tedious when you add more sides at awkward angles. Fortunately one of the things programming is great at is automating tedious things and that's exactly what we're going to explore here.

The solution I'm hoping to build is fairly straight forward and actually doesn't take much time at all. We can extract normal's from a mesh and then take the distinct set of normal's as the set of possible sides for our dice. This actually can be written in a single line of code with some LINQ.

```csharp
Vector3[] CalculateNormals(Mesh mesh)
{
   return mesh.normals.Distinct().ToArray();
}
```

The solution has a few issues though and we'll take a look at how we might solve some of them. When looking at an object like a cylinder for example we'll get a large number of sides calculated because each edge of the cylinder is a unique side of our dice. We probably don't actually want that to be the case. We'll design a way we might be able to solve this before stepping back and taking a bit of a longer look at the problem.

The basic question of getting unique sides for a dice is solved, but if we want to advance this solution for more complicated shapes and allow it to handle not quite aligned vertices we'll need to do some more work. If you have an idea for a design, let me know! Otherwise I'll be here designing something to help us provide another solution.

The original Dice Roller was built in this video: https://www.youtube.com/watch?v=hmDF9PvMDVw

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u