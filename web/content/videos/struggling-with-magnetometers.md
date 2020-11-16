---
title: "Struggling with Magnetometers"
alias: ["/v/Am-7PSA8b40"]
date: 2017-12-20
featured_image: https://i.ytimg.com/vi/Am-7PSA8b40/mqdefault.jpg

---

{{% youtube id="Am-7PSA8b40" %}}

This is an exercise in how to make a problem far harder than it needs to be. Grab a magnetometer, a device which measures the magnetic fields at a point and attach it to an arduino with some LED's. We want to translate magnetic north onto the LED's so that the LED strip displays north. A sort of hi-tech digital compass.

We start with an idea: dot products can be used to compare two vectors so lets use them to compare the direction from our magnetometer and true north. This is silly. While the dot product can tell you the angle between two points it won't tell you which direction you need. More importantly we also decide it's necessary to recalculate the vectors for the magnetometer reading.

To be clear, the Adafruit Magnetometer/Accelerometer we are using here already provides this. I don't know why I didn't use that reading. Instead since we are retrieving the orientation instead we'll need to solve for the actual vector. A major complication but a fun exercise in 3D coordinates and a good way to highlight that I don't remember my 3D math as well as I thought.

Once we ditch the dot products for not working and refine the orientation calculation we can actually do the real work. We need to translate rotation into pixel coordinates. That is, given a direction we need to select which pixel to highlight. This can be done using some simple conversions effectively converting rotation in degrees into pixel by id.

A fix to correctly calculate the orientation:
I was able to fix the measurements using code from this website. http://www.meccanismocomplesso.org/en/arduino-magnetic-magnetic-magnetometer-hmc5883l/

In short we can use the arctangent of the X and Y components to calculate our vector. This does work and I have it fully functioning now. For simplicity's sake the parts about correcting for magnetic declination (the "noise" in the earths magnetic field) is ignored.

Parts list:
Arduino Uno: https://store.arduino.cc/usa/arduino-uno-rev3
Adafruit Triple-Axis Accelerometer+Magnetometer: https://www.adafruit.com/product/1120
Neopixel RGB LED Strip (144 LED): https://www.adafruit.com/product/1506
Adafruit PowerBoost 500 Shield: https://www.adafruit.com/product/2078
Lithium Ion Battery (3.7v 2000mAh): https://www.adafruit.com/product/2011

These parts are for creating a mobile piece that can be worn. For development neither the PowerBoost shield nor Lithium Ion battery are necessary.

Discord: https://discord.gg/hU5Kq2u