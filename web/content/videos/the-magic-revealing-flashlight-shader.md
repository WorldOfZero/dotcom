---
title: "The Magic Revealing Flashlight Shader"
date: 2017-04-01
featured_image: https://i.ytimg.com/vi/b4utgRuIekk/mqdefault.jpg

---

{{% youtube id="b4utgRuIekk" %}}

Let's make a revealing shader that is normally blank and full transparent, but when you shine a light on it becomes revealed. A useful effect for blacklight effects (think the Condemned blacklight as an example).

To accomplish this effect we're going to use a simple dot product calculation using the direction of our flashlight and the difference between the flashlight and the fragments world position. Then we can use the cosine of our flashlights angle to generate the point where our flashlight is no longer effective. By using that cosine and the dot product we calculated earlier we can decide when and when not to reveal things. That's all we need to do! It's simple, but creates a really nice effect.

Because of the way this works we will need a script to send the lights angle, direction and position to our material. This script allows us to use a light that isn't bound directly to the camera.

Want the shader code? It's open source on GitHub! Grab it here: https://gist.github.com/runewake2/2a979d6bc91adc7ce693a5c00af8bed1

Based on this question from /r/Unity3D: https://www.reddit.com/r/Unity3D/comments/62r36h/magic_flashlight_selective_rendering/