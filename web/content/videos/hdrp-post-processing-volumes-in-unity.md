---
title: "HDRP Post Processing Volumes in Unity"
aliases: [/v/uzpUYBNsdb0/]
date: 2019-05-28
featured_image: https://i.ytimg.com/vi/uzpUYBNsdb0/mqdefault.jpg

---

{{% youtube id="uzpUYBNsdb0" %}}

With the Scriptable Render Pipeline in Unity 2019 a new post-processing concept has been introduced. This allows you to define `Volumes` which apply a set of effects across the scene or to a particular portion of the screen. For example changing the amount of saturation, white-balance or bloom to emphasize different parts of the environment.

Unity Scene's in the HDRP (High Definition Render Pipeline) have Volumes by default. These are used to define global default post-processing effects and are done by setting the `IsGlobal` flag of the `Volume` to `true`. We can start having a lot of fun when we disable that flag on our own custom `Volume`s.

To get started with this, you'll need to create a new `GameObject` and add a `Volume` component to it. Disable the `IsGlobal` option to create a localized post-processing effect. Next add a second component to the game object that is a Collider which represents the volume you want to apply the effect in (I don't show this, but you probably want to set this Collider to be a Trigger to avoid randomly colliding with your effects 😅). Once this collider is added the warning to add a collider should disappear - local post-processing effects will not work if you do not define a collider to provide the area of effect.

Now that we have an area defined for our Post Processing Effects add an existing Volume Profile or create a new Profile (this will create a new Asset under your base `Assets/` directory - you probably want to move it somewhere else). Once you have the profile, modify the settings to match the effect you are hoping to achieve by adding or removing Overrides. These override the default render settings of the scene with the values you provide. Disabling the settings in the menu will defer the value to the existing defaults.

After the Profile is configured you should see your effects applied as soon as the camera is moved into the Collider you defined originally. If you would like the transition to be smoother between the effects you may also add some amount of blending. This pads the area outside the area you defined and applies a portion of the effect you configured based on how close to the effect Volume the camera is.

If you do not want to move your camera around to test each of your Volume's you can also toggle the `IsGlobal` flag to temporarily apply the effect globally.

Unity has documented these Volume Overrides more on their GitHub page. Check that out here: https://github.com/Unity-Technologies/ScriptableRenderPipeline/wiki/Volume-Overrides

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u