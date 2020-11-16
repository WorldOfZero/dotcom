---
title: "Learning to Compile a Java Class From Scratch"
aliases: [/v/6O9QEh924h8/]
date: 2019-08-11
featured_image: https://i.ytimg.com/vi/6O9QEh924h8/mqdefault.jpg

---

{{% youtube id="6O9QEh924h8" %}}

Lets explore how you can compile a Java file from scratch without an IDE or other tool. All you will need to be able to do this is the Java Development Kit (JDK). This process is admittedly not one you'll want to do often, but is nice to know. I find understanding what my tools are doing behind the scenes and how the platform I'm working on works extremely useful when working with them.

This process uses two programs. `javac` is the Java Compiler which compiles a `.java` file from the code you have written into java's intermediary language - the Java Byte Code. Java byte code is what is actually read by your computer. Once we have Java Byte Code we will need something that can run it. This is where the `java` command comes in. Given a `.class` file (the compiled byte code file) the `java` command can run that program in the Java Runtime Environment. This is what makes your code actually run!

There is a lot more possibilities behind how all of this can work, but the goal here is to cover the basics of what's going on and step through how to do them. If you want to explore the more complex parts of this like building `.jar` files and running them there is plenty of documentation online to get you started (or leave a comment and I'll see if I can get to it!).

In order to run and your java class you will need to use `javac` to compile the java file and then run the compiled byte code using `java`. If your java class was named `test.java` you would run this:

```sh
javac test.java
# This will output test.class
# Now we run the class we compiled
java test
```

You'll need to a version of the JDK installed to run this code. If you have installed the JDK but do not see `java` or `javac` as options in your command-line you may need to add the JDK to your `PATH`. Your systems `PATH` is used to scan for binary commands inside your shell. How you modify this will depend on your operating system.

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u