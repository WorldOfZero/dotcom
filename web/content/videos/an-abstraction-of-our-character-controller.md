---
title: "An Abstraction of our Character Controller"
aliases: [/v/emzftWxwS1c/]
date: 2020-03-21
featured_image: https://i.ytimg.com/vi/emzftWxwS1c/mqdefault.jpg

---

{{% youtube id="emzftWxwS1c" %}}

Lets take a look at building an abstraction over a character controller in our 2D platforming game. The goal of this refactoring and abstraction pattern is to improve the testability and modularity of the character controller. Hopefully by introducing this model we'll have a character controller that we can test and extend easily without introducing to much additional complexity into the project.

My abstraction design has two new components; `States` and `Actions`:

States are data providers that expose different properties to Actions. An example State might store the current controller Input's that our player is receiving. Each State is intended to store a discrete composable part of the total controller state, this is done so that individual state objects may be swapped out to support different features or tests. For example a Keyboard and Mouse State could be swapped for a Controller State to account for different input capabilities.

Actions consume the objects state and perform different State modifications of the current objects state or the game. For example an Action may consume our Input state and use that to move the player in the world. Actions do not directly interact with one another but communicate through state modifications instead. Because each Action describes a single behavior this allows us to introduce temporary new behaviors to simulate in game effects.

We can use a combination of these States and Actions over time to build out the complete capabilities of our character controller and hopefully provide a concrete testing surface for us to use.


I talk a bit about Dependency Injection, some notes on that: I've avoided Zenject in this implementation and might for the entire project. While dependency injection and inversion of control can introduce gains for testing it can also cause a significant increase in the complexity of your code. Part of the goal with the implementation here was to minimize that impact as much as possible while still benefiting from the testability of these abstractions. I'd encourage the same thoughts when reviewing abstractions for your own designs - introducing too much complexity can make the maintainability of your project significantly more difficult.


Infallible Code has a fantastic series on Zenject that covers a variety of topics around Dependency Injection and its uses inside Unity, if you want to go that route with your own project I recommend giving it a look: https://www.youtube.com/watch?v=IS2YUIb_w_M&list=PLKERDLXpXl_jNJPY2czQcfPXW4BJaGZc_

I've also put together a video covering the Dictionary constructor in C#, more info here: https://youtu.be/lFsgmxzw7IU

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u