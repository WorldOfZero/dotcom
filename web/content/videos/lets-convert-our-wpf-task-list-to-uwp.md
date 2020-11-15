---
title: "Lets Convert our WPF Task List to UWP"
date: 2017-06-07
featured_image: https://i.ytimg.com/vi/P3QF4S-ATUs/mqdefault.jpg

---

{{% youtube id="P3QF4S-ATUs" %}}

How difficult is it to convert a WPF application to a UWP app you can distribute on the Windows Store? Turns out it's not that hard at all!

In fact we don't have to change any code at all!

To get this working we just need to create a new UWP Project, move our View Model's and Commands over from the previous project. Then, since both WPF and UWP have App and MainPage's we can simply move our code from our code behind of our Main Window to our Main Page in UWP. Once that's done everything just works.

This is largely so easy because we haven't used anything in our WPF application that would extend beyond the UWP Sandbox or any custom controls that aren't supported in UWP. The conversion process can be far more difficult in those cases. However, for our simple app it's literally as easy as dragging and dropping and that is awesome!

If you do need to convert projects that contain more complex components this video unfortunately will not help you there and the process itself is largely going to depend on exactly what you are working on.

For those more complex applications Microsoft has some documentation on how you can begin working to bridge your legacy code and get it onto the Windows Store running as a Universal Windows Platform app. You can browse that documentation here: https://developer.microsoft.com/en-us/windows/bridges/desktop

Music Credits:
"Voice Over Under" Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/