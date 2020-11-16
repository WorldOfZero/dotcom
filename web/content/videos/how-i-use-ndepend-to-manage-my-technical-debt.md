---
title: "How I Use NDepend to Manage my Technical Debt"
alias: [/v/6fRCLx8gWAI/]
date: 2018-04-29
featured_image: https://i.ytimg.com/vi/6fRCLx8gWAI/mqdefault.jpg

---

{{% youtube id="6fRCLx8gWAI" %}}

Static code analysis tools are tools that are able to inspect your code without actually executing it. They are valuable tools in the constant fight for good code. Different static code analysis tools will uncover different things, some like Resharper focus on the micro level changes in your code (you can refactor this Property for example). In this video we'll take a look at a tool that focuses on the other side of the spectrum. Ndepend allow you to inspect dependency graphs for functions or projects, create and use rules to analyze code quality and more.

**I was provided a license from NDepend in order to test out the tool.**

In this video we'll cover some of my thoughts on the tool since I adopted it and how I'm using it to account for some of my technical debt. We'll look at 3 features that I've found useful in my own projects: Rules, Graphs and Trends.

Rules are written in NDepend's slightly customized version of LINQ called CQLINQ (Code Quality LINQ: https://www.ndepend.com/docs/cqlinq-syntax). This means every single code quality check is written in code that you have full access to edit to fit your needs. Rules generate information about your project such as projected technical debt (as a time based metric) and the overall status of your projects code.

Graphs (Matrices are also supported if you prefer that) are a way to visualize your projects dependencies such as the libraries your own projects require to function. You can also use NDepend's graphs to graph out the expected call stack of your methods. This will show which methods call which other methods and how they relate to one another.

Trends are used to track your technical debt over time and provide a report on the overall state of your project. This can help light up if your technical debt has spiked or if you've resolved some bigger issues lately.

You can find out more about NDepend at their website here: https://www.ndepend.com

We built the UWP app we analyze in this video here: https://youtu.be/VXFS0C8ZMNY

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u