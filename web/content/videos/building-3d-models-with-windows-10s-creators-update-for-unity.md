---
title: "Building 3D Models with Windows 10's Creators Update  for Unity"
alias: [/v/zULUcJyyjx0/]
date: 2017-02-10
featured_image: https://i.ytimg.com/vi/zULUcJyyjx0/mqdefault.jpg

---

{{% youtube id="zULUcJyyjx0" %}}

Today we're going to try something a little different! Lets explore building 3D models using the included tools in the Windows 10 Creators Update and see how useful these tools are for our game development needs. We'll be exploring two different tools: Paint 3D a tool built for creating simple art, painting on 3D models and sharing and modifying your art with other users. The other tool is 3D Builder designed more for 3D printing, but still useful for our purposes.

Paint 3D offers a less precise, more freeform way to build your models. There is no concept of polygons or triangles and you won't see any references to most standard modeling frameworks features. Instead it cuts those features and focuses on two core features. Allowing you to "draw" simple 3D objects and shapes and allowing you to draw materials onto those models. This provides a very convenient texturing solution that works surprisingly well. You can stamp images onto your models or take a pencil or one of the various other brushes and draw manually. Both work quite well. Best of all you can export your finished model as an FBX which will bring your model and texture in full working order to Unity. This means Windows 10 now includes a quick and easy way to both build and texture models!

3D Builder, as I mentioned earlier is targeted more towards the maker crowd with the ability to directly export your designs to either a local 3D printer or a web service that will print and deliver your model to your door. Because of this, 3D Builder does include a lot more precise tooling. You can measure your models down to the millimeter, do boolean addition, subtraction and intersection and also modify and view the actual mesh geometry. This makes the tool far more capable when developing certain styles of 3D models. However, 3D Builder does not allow you to paint on your model or export to Unity. In order to get that working you need to go a little out of your way and export the model as a 3MF file. With that file you can import it into Paint 3D, paint your texture onto your model and then export that as an FBX format into your Unity project. Not exactly intuitive.

These tools both will not offer you the sheer amount of customization you get from dedicated modeling programs like Blender, Maya or 3DS Max but they will offer you a condensed feature set in an easy to use tool that makes building and using the models you create extremely simple. These tools try to bring 3D to the masses and while they aren't an outstanding success they do accomplish this in some regard. Enough that they're worth investigating certainly! Particularly if you can afford not to crunch triangles.

These tools are made even better with Remix 3D, a built in social network designed to allow you to share, download and remix other peoples models. I'm not sure what kind of licensing this service bears, but it seems to suggest community involvement will be a major feature of the 3D modeling tools offered by Microsoft in the upcoming Creators Update.

The Creators Update is expected to land on all Windows 10 devices early this year and these tools are already available on the Windows 10 Insider Preview builds.

What do you think? Would you use these tools for your next project?

Paint 3D can be found on the Windows 10 store here: https://www.microsoft.com/en-us/store/p/paint-3d-preview/9nblggh5fv99

3D Builder is also on the Windows store: https://www.microsoft.com/en-us/store/p/3d-builder/9wzdncrfj3t6