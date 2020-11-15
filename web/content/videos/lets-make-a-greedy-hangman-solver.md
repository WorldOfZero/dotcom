---
title: "Lets Make A Greedy Hangman Solver"
date: 2017-05-02
featured_image: https://i.ytimg.com/vi/KBbGAQKPRxE/mqdefault.jpg

---

{{% youtube id="KBbGAQKPRxE" %}}

At work we play Hangman occasionally. Let's see if we can't ruin the fun by creating an algorithm to select the best guess based on statistics.

The solution is relatively simple and focuses on eliminating as many options as possible with each guess. This is done by choosing a solution as close to the middle as we can. Effectively a custom binary search that doesn't always choose the middle element (but the closest we can get to the middle).

This algorithm does get to the answer, however, due to the number of possible word choices at least with the current solution a number of basic words are very difficult to guess. This is because we have more roughly 80,000 elements in our original list. Log base 2 of 80,000 comes out at just around 16, which is the approximate number of guesses we would need to make to solve any problem given optimal distributions. We can make our chances better by limiting our search to only work on words that have the same length as our target one. But even that doesn't get our answer in the time we want in the cases we test.

Due to that, I think this solution is a good start, but not necessarily a great final solution. We need something else to make this a viable solution for most words.

Mark Rober has a great video that covers the statistics around why this approach is the best one: https://www.youtube.com/watch?v=FRlbNOno5VA

The project is open source and available on GitHub here: https://github.com/WorldOfZero/Hangman-Solver