---
title: "Introducing Side Effects Into C# Properties - The Dangers of Being Clever"
date: 2018-01-16
featured_image: https://i.ytimg.com/vi/ZU5NLOeY_W0/mqdefault.jpg

---

{{% youtube id="ZU5NLOeY_W0" %}}

Side Effects are one of those things we don't always consider when writing code. Sometime even basic maintenance can introduce them. A recent Reddit thread about an interesting interview question brought up one of the interesting examples of how side effects can make your code do very weird things.

A side effect, in the simplest case is when a method or action causes something to happen other then the described method or action. If I turn on my water faucet using `turnOnWater()` and water comes out of the faucet that's the intended effect, but if calling that function also causes `neighbor.waterPressure` to drop then we've introduced a side effect in our code. Side effects can take a lot of forms and this is just one example of them.

This video explores a bit more on the theory side and is a bit different then some previous videos. I'd love to know what you think and if you'd like more videos on topics like this!

The Stack Overflow question we reference can be found here which includes some solutions in Javascript: https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true

The reddit discussion of the question is here: https://www.reddit.com/r/programming/comments/7qv7pu/javascript_can_a_1_a_2_a3_ever_evaluate_to_true/

The AtomicInteger we briefly bring up is actually a Java type (whoops) which you can learn more about in the JavaDocs here: https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/atomic/AtomicInteger.html

A close alternative to the atomic types in Java is the Interlocked class which doesn't expose the same kind of side effects that we were covering here (double whoops): https://msdn.microsoft.com/en-us/library/system.threading.interlocked(v=vs.110).aspx

Discord: https://discord.gg/hU5Kq2u