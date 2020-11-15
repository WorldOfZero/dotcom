---
title: "Exploring Reflection - Unity Observer - Part 3"
date: 2018-05-22
featured_image: https://i.ytimg.com/vi/CSPxKW8ntas/mqdefault.jpg

---

{{% youtube id="CSPxKW8ntas" %}}

Returning to Unity Observer, a project that enables you to easily analyze data in bulk from your Unity scenes. This time we're going to dive into taking advantage of C#'s reflection and how we can use it to expand the fields we can modify. To start we'll look into making it possible to edit other Vector3 fields on the Transform component attached to each Game Object.

The process for solving this takes place in a few steps. First we will add a text box that allows us to search for the property or field we want to observe. Then we will need to reflect over the component we're inspecting (for now this is hard coded to the Transform component) and attempt to find a field or property that shares the name that was provided. Once we have that we will need to verify that the field/property is of the Vector3 type. For now we only support Vector3's. Once we have a valid Vector3 field or property we can display its current value to in the existing Editor UI and expose it for editing.

By the end of this implementation we'll be able to find, view and edit any Vector3 member on a Transform component. Some examples of this include `position`, `localPosition` and `localScale`.

Join the World of Zero Discord channel: https://discord.gg/hU5Kq2u

Thumbnail Image Credits:
By Brocken Inaglory [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], from Wikimedia Commons
https://commons.wikimedia.org/wiki/File:Reflection_in_a_soap_bubble.jpg