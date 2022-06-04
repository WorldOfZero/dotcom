---
title: "Handling 3rd Person Camera Physics with SphereCast's"
aliases: [/v/Cfcr7FtbYQo/]
date: 2022-06-04
featured_image: https://i.ytimg.com/vi/Cfcr7FtbYQo/mqdefault.jpg
tags: [ unity3d,csharp,dotnet,tutorial,livecode ]

---

{{% youtube id="Cfcr7FtbYQo" %}}

Hello again internet! Let's dive into how to manage camera physics in your third person cameras using `SphereCast`s.

`SphereCast`'s expand upon what you might know about raycasts projecting a beam through your scene that can detect physical objects in the scene and let you know if it's hit them. Unlike a raycast though a `SphereCast` includes a radius. This can prevent the detection from going through tight spaces or between closely aligned Game Objects.

To showcase this, we're going to build a quick 3rd Person Camera in a scene that has some narrow alleyways. In order to prevent our camera from clipping geometry inside those alleyways and to prevent it from ending up in a narrow space we'll project a sphere using a `SphereCast`. This gives our camera some safety and improves the quality of the camera positioning.

You can find more information about `SphereCast`'s in Unity's documentation here: https://docs.unity3d.com/ScriptReference/Physics.SphereCast.html

***

The code we wrote in this video is here if you'd like to try it yourself!

```csharp
using UnityEngine;

public class ThirdPersonCamera : MonoBehaviour
{
    public float cameraSpeed;
    public Transform cameraTransform;
    public float cameraDistance;
    public float radius = 0.25f;

    void Update()
    {
        // Multiplying quaternions adds them together
        this.transform.rotation *= Quaternion.Euler(0, cameraSpeed * Input.GetAxis("Mouse X"), 0);

        // Move Camera back until we get near a Physics Collider
        Ray ray = new Ray(this.transform.position, -this.transform.forward);
        RaycastHit hit;
        if (Physics.SphereCast(ray, radius, out hit, cameraDistance))
        {
            cameraTransform.localPosition = Vector3.back * hit.distance;
        }
        else
        {
            cameraTransform.localPosition = Vector3.back * cameraDistance;
        }
    }

    // Draw a Gizmo around where the camera has been projected to.
    void OnDrawGizmos()
    {
        Gizmos.color = Color.blue;
        Gizmos.DrawWireSphere(cameraTransform.position, radius);
    }
}

```

Looking for an introduction to `Raycast`s? Check out my video on Raycasting in Unity: https://worldofzero.com/videos/detecting-objects-with-raycasts-in-unity3d/

If your interested in some of my other Cloud based videos I stream at twitch.tv/MicrosoftDeveloper regularly and some of my other videos can be found on the Microsoft Reactor YouTube channel: https://www.youtube.com/c/MicrosoftReactor1

I currently run events out of the Microsoft Reactor in San Francisco as well! If your nearby and want to learn things or join a workshop in person checkout our meetup group. https://www.meetup.com/Microsoft-Reactor-San-Francisco/

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u