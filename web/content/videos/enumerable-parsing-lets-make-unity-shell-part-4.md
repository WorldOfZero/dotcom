---
title: "Enumerable Parsing - Lets Make Unity Shell - Part 4"
alias: [/v/2NQ2qTrxnCE/]
date: 2017-08-02
featured_image: https://i.ytimg.com/vi/2NQ2qTrxnCE/mqdefault.jpg

---

{{% youtube id="2NQ2qTrxnCE" %}}

Let's expand upon the Conversion support we added in the last video. The goal here is to add full support for the conversion of all Enumerable types. This will add an implicit conversion to any enumerable type parameter that is done using a slightly modified converter. Conversion takes advantage of Enum.Parse() which allows parsing by both name and value.

This will allow us to automatically convert to any enumerable type without requiring the user to make their own converter for each enumerable type they want to use.

Single conversions by name are supported such as:
Sphere → PrimitiveType.Sphere
- or -
Average → PhysicMaterialCombine.Average

Conversions by value are supported such as:
0 → PhysicsMaterialCombine.Average

Conversions by lists of names are supported such as:
Read,Write,PathDiscovery → FileIOPermissionAccess.Read | FileIOPermissionAccess.Write | FileIOPermission.PathDiscovery

Conversions by flag values are supported such as:
3 →  FileIOPermissionAccess.Read | FileIOPermissionAccess.Write

Learn more about using Enum.Parse() here (including additional examples): https://msdn.microsoft.com/en-us/library/essfb559(v=vs.110).aspx

Grab Unity Shell for yourself on GitHub: https://github.com/WorldOfZero/Unity-Shell

Discord: https://discord.gg/hU5Kq2u