---
title: "Exploring How to Write Custom Pixel Shaders for the Windows Terminal"
aliases: [/v/YF50axsb-cA/]
date: 2021-10-06
featured_image: https://i.ytimg.com/vi/YF50axsb-cA/mqdefault.jpg
tags: [ shader,tutorial,windows ]

---

{{% youtube id="YF50axsb-cA" %}}

The Windows Terminal is a new terminal for Windows that allows you to run PowerShell, Command Prompt, the Azure Command Shell or any other terminal environment. One of the cool experimental features it includes is the ability to run a custom DirectX pixel shader when rendering the terminal. This can allow you to customize your prompt and create cool visual effects in your Terminal. Let's explore how you can configure and create your own shader for the Windows Terminal!

To use a shader you will need to update your Windows Terminals `settings.json` file to point to a DirectX pixel shader file. The setting is called "experimental.pixelShaderPath" and is located in your terminals "profiles". In this example we'll be applying the shader to every profile in our terminal by default by updating our settings file like this:

```diff
  "profiles": 
  {
      "defaults": 
      {
          ...
+         "experimental.pixelShaderPath": "The absolute path to our shader.hlsl",
      }
  }
```

A basic shader that just rerenders the sampled terminal input might look like this:

```hlsl
Texture2D shaderTexture;
SamplerState samplerState;

float4 main(float4 pos : SV_POSITION, float2 tex : TEXCOORD) : SV_TARGET {
    return shaderTexture.Sample(samplerState, tex);
}
```

It includes a `shaderTexture` which is a Texture that contains the rendered content of the Terminal prior to your shader being applied. This means it will include the colored text but none of your effects. A `samplerState` is also provided which provides state information about sampling the texture.

The shader requires a `main` method that returns a four dimensional vector containing the red, green, blue and alpha channels to render. A transparent result will render the background of your terminal profile.

To modify the behavior of the shader, change the results returned from the `main` method to match your desired outcome and update the Windows Terminal. You should be able to see the results of your changes. For example our shader that only renders the red channel of our terminal has a `main` method that looks like this:

```hlsl
float4 main(float4 pos : SV_POSITION, float2 tex : TEXCOORD) : SV_TARGET {
    float4 color = shaderTexture.Sample(samplerState, tex);
    return float4(color.r, 0, 0, color.a) ;
}
```

Some additional documentation on Windows Terminal pixel shaders is available on the Windows Terminal GitHub page here: https://github.com/microsoft/terminal/blob/main/samples/PixelShaders/README.md

That README includes additional information including how to access the `PixelShaderSettings` which provide information such as a `Time` variable to create animated effects!

***

If you'd like to add a shortcut that can toggle shader effects on or off then you can add an action to your Windows Terminals `settings.json` file. In the `actions` block add an entry for `toggleShaderEffects` like this:

```json
"actions":
[
   ...
   {
        "command": "toggleShaderEffects",
        "keys": "shift+f10"
   }
]
```

In my example pressing the Shift and F10 key would toggle shader effects.

***

If you don't have the Windows Terminal you can download it here: https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701

You can find some additional examples of Windows Terminal shaders here: https://github.com/Hammster/windows-terminal-shaders
My pride flag Windows Terminal shader is located here: https://worldofzero.com/posts/pride-windows-terminal/
Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u