---
title: "Building a Custom Dice Model with OpenSCAD"
aliases: [/v/HxiyUi4RQzw/]
date: 2022-11-25
featured_image: https://i.ytimg.com/vi/HxiyUi4RQzw/mqdefault.jpg
tags: [ 3d printing ]

---

{{% youtube id="HxiyUi4RQzw" %}}

OpenSCAD is a tool that can compile programs into 3D models allowing you to code your own CAD designs instead of building them inside of a WYSIWYG type editor like Fusion 360, SketchUp etc.

The module we created for a basic dice looks like this:

```OpenSCAD
module CreateDice(size = 16) {
    textSize = size * 0.75;
    textLocation = size / 2 - 1;
    textExtrusionSize = 2;
    difference() {
        cube([size, size, size], center = true);
        translate([0,0,textLocation]) linear_extrude(textExtrusionSize) text("1", size=textSize, halign="center", valign="center");
        rotate([180, 0, 0]) translate([0,0,textLocation]) linear_extrude(textExtrusionSize) text("6", size=textSize, halign="center", valign="center");
        rotate([0, 90, 0]) translate([0,0,textLocation]) linear_extrude(textExtrusionSize) text("2", size=textSize, halign="center", valign="center");
        rotate([0, 270, 0]) translate([0,0,textLocation]) linear_extrude(textExtrusionSize) text("5", size=textSize, halign="center", valign="center");
        rotate([90, 0, 0]) translate([0,0,textLocation]) linear_extrude(textExtrusionSize) text("3", size=textSize, halign="center", valign="center");
        rotate([270, 0, 0]) translate([0,0,textLocation]) linear_extrude(textExtrusionSize) text("4", size=textSize, halign="center", valign="center");
    }
}
```

Get OpenSCAD: https://openscad.org/index.html
OpenSCAD's documentation: https://openscad.org/documentation.html
OpenSCAD on GitHub: https://github.com/openscad/openscad/

You can get a copy of my models and the SCAD files that generate them here: https://github.com/runewake2/scad-examples

Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u