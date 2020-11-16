---
title: "Unit Testing in Unity Using the Unity Test Runner"
aliases: [/v/4hwMmdbnH90/]
date: 2018-02-19
featured_image: https://i.ytimg.com/vi/4hwMmdbnH90/mqdefault.jpg

---

{{% youtube id="4hwMmdbnH90" %}}

Testing code is important. It ensures that the code you just wrote works, but more importantly it serves as documentation about exactly what your code does and ensures that after months of maintenance and changes that the code you haven't touched in months still does what you think. This is extremely handy when you're working on long projects or have a team developing code.

We're going to specifically look into implementing NUnit tests in Unity using the Unity Test Runner that is now shipped with Unity. We'll explore how to create and run tests as well as some of the concepts behind testing like the testing pyramid and different types of tests you can use. The focus here is going to be on writing simple unit tests to confirm that your functions do what you intend.

In a future video we'll look into some of the more specific Unity features for testing that will allow you to expand your test coverage into Integration and Functional tests that cover things more common in games.

The testing pyramid looks something like this:

```
    /\ - Functional Tests
   /--\
  /    \ - Integration Tests
 /------\
/________\ Unit Tests
```
* Functional Tests: are the broadest form of tests and usually include multiple full components. A game writing to a high scores database, or checking a players online stats. These kinds of tests often require customized testing environments.

* Integration Tests: a middleground between functional and unit tests. Instead of testing the database for to confirm we wrote the highscore we will instead create a Database Mock, a fake implementation of the Database, that doesn't store the data but will tell us if we attempted to write to it.

* Unit Tests: step back even further and are designed to isolate components. Instead of testing writing to a database you might test things like an AddScore() function adding 10 points to your score or that AddScore() doesn't reset your score every time someone calls it. These are the most plentiful form of test and often the most descriptive. In many cases a broken unit test will make it very clear what has gone wrong.

More about using the Unity Test Runner here: https://docs.unity3d.com/Manual/testing-editortestsrunner.html

Discord: https://discord.gg/hU5Kq2u