=== Wordpress Animation Deluxe ===
Contributors: Tal Rimer
Tags: animation plugin,anime.js
Requires at least: 5.5
Tested up to: 8.1
Stable tag: 1.0
Requires PHP: 7.0
License: GNU General Public License v2.0 or later

Adding stunning animations to WordPress elements by using the animejs library.

== Description ==
WordPress Animation Deluxe allows you to easily integrate the anime.js library into WordPress without the need for code. 
The plugin allows you to execute the code from various events: page entry, element click, and mouse over.

The animations that can be used in the plugin:

Object Move Point X To Y
Object Move Point X To Y Delay
Counter
Transformation 1
Transformation 2
Transformation 3 SVG
Alternate
Element Grows
Ease in Out Color
Ease Out Elastic
Ease Out Elastic 2
Ease Out Quad Rotate
Steps
X To Y And Y To X Scale Color

In the admin interface you can define different settings for each type of animation similar to using the anime.js library.
You can define the event that will trigger the animation: no event, click event and hover event.
Click the play button to see a preview of the animation.

There are 2 complex animations: Ease Out Elastic 2, and X To Y And Y To X Scale Color, you can use the default settings or add code for programmers.

An example of code in the Ease Out Elastic 2 animation:

 translateX: [
 { value: 250, duration: 1000, delay: 500 },
 { value: 0, duration: 1000, delay: 500 }
 ],
 translateY: [
 { value: -40, duration: 500 },
 { value: 40, duration: 500, delay: 1000 },
 { value: 0, duration: 500, delay: 1000 }
 ],
 scaleX: [
 { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
 { value: 1, duration: 900 },
 { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
 { value: 1, duration: 900}
 ],
 scaleY: [
 { value: 1, duration: 500 },
 { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
 { value: 1, duration: 450 },
 { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
 { value: 1, duration: 450 }
 ],
 easing: 'easeOutElastic(1, .8)'

An example of the X To Y And Y To X Scale animation code:

.add({
 translateX: 250
 }).add({
 scale: 2
 }).add({
 translateX: 0
 });

 == Installation ==

1. Visit Plugins > Add New.
2. Upload the zip file.
3. Install the plugin and activate.
4. In the admin menu, Wordpress Animation Deluxe will appear.