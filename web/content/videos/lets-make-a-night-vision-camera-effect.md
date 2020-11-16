---
title: "Lets Make a Night Vision Camera Effect"
alias: [/v/mElPESXcakM/]
date: 2017-05-03
featured_image: https://i.ytimg.com/vi/mElPESXcakM/mqdefault.jpg

---

{{% youtube id="mElPESXcakM" %}}

I've been exploring the Outlast games lately and wanted to try to reproduce the night vision camera that is such a staple of that game.

To do this we're going to look at creating an Image Effect in Unity that can read the depth map of our camera and use that depth to draw our night vision effect. This is provided in the fourth value of the image space. That means the camera renders a red, green and blue vector space. But also renders a fourth depth value that measures how far from the camera every pixel is. We can tint the depth to generate the classic green of a night vision camera.

The code for this effect is open source and available on my GitHub page here: https://github.com/WorldOfZero/UnityVisualizations

This video includes assets from the Extreme Sewer Kit asset on the Unity asset store. If you want to add it to your project then here is the link: https://www.assetstore.unity3d.com/en/#!/content/21882