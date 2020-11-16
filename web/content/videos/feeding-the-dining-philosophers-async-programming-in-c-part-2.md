---
title: "Feeding the Dining Philosophers - Async Programming in C# - Part 2"
aliases: [/v/wD9nM7IoabA/]
date: 2016-12-22
featured_image: https://i.ytimg.com/vi/wD9nM7IoabA/mqdefault.jpg

---

{{% youtube id="wD9nM7IoabA" %}}

Returning once more to our dining philosophers and their ponderous feast. We left them starving having been deadlocked without the utility to eat. We'll be solving this problem of deadlock in two different ways.

The first will alter how one of our philosophers chooses their chopsticks. By doing this we ensure that at least one philosopher will always be able to eat. This solution was the one originally proposed by Dijkstra when he originally came up with this concurrent problem. It is the solution I recommend for this problem.

The second solution introduces significantly more complexity to the problem by adding another member to our table. A waiter who chaperones the philosophers and serves to restrict who may attempt to retrieve their chopsticks. This allows each philosopher to safely ensure that both chopsticks are available before acquiring either of them and when they attempt to acquire the chopsticks that their not interrupted during the process. This solution is significantly more work and also posses some substantial risks to anyone attempting to maintain the code. As you'll see, even a quick mistake can cause deadlock and therefore starvation to return back to the problem.

Which do you prefer? The altered order or the waiter who oversees the chopsticks? Let me know in the comments!

A solution which uses varied order to avoid deadlock: https://gist.github.com/runewake2/4a51270f72484e64f3789fb36a74f2da

A solution created using the waiter method: https://gist.github.com/runewake2/c97c3a5bf41da733926ff5e2aa6f3533