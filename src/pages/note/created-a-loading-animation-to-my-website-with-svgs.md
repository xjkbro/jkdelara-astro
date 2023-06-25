---
title: Created a Loading Animation to my Website with SVGs
description: Day 4 of a 100 Days of code and I created a loading animation to my portfolio.
date: 2023-04-04T07:07:46.000Z
image: /note/created-a-loading-animation-to-my-website-with-svgs/cover.webp
draft: false
layout: ../../layouts/NotesLayout.astro
categories:
    - code
type: note
---

I took inspiration of this from [Brittany Chiang's](https://brittanychiang.com/) portfolio. She has her portfolio published on Github and actually allow others to fork her repository to use it as their own. Honestly, I wanted to reconstruct it without looking at how she did it. If you've been keeping up with my 100 Days of Code challenge. On my first day I had learned about SVGs and animating them. So it was time to test my skills and try and add this loading animation Brittany had added to her site. Here is a gif of how her loading screen looks like.

![](/note/created-a-loading-animation-to-my-website-with-svgs/brittany-chiang-loading.gif)

I started this project off by creating a better SVG of my Logo in Figma.
![](/note/created-a-loading-animation-to-my-website-with-svgs/figma.png)
Honestly, I think it could use more work but I really didn't want to spend a lot of time on the design. But the purpose of recreating it was to have a single stroke create the entire logo. The one I had featured in my previous post had 2 different strokes and made the animation pretty wonky.

That being said. I took that exported it to an SVG file and got the SVG code for my logo and added it to a client component called Wrapper. This wrapper class handles all the client side components that are needed for every page and route so like the ability to create a transition for my dark mode or hold state of my menu overlay for mobile. And because I will be using framer motion to animate my loading logo, it also needed to be in a client component. In this component I created a motion div and used Tailwind to give it a full screen width and height, z-index of 10+, fixed position, center everything to the center with flexbox and background color of my choosing. There could be a better approach of styling it but screw it lol

In this div tag I had my SVG code of my logo and applied a motion to each tag in my logo. Framer motion makes it so easy for us to animate SVGs from this [example](https://www.framer.com/motion/examples/#line-drawing) in their docs, it really is just adding a pathLength property to the initial and animate attributes for each svg component. This basically does all the hard work of finding the right dasharray and dashoffset for each component. Now for my animation, I wanted to draw my logo first, then fill it in with my orange. To achieve this all I had to do was mess around with the duration and delays of each components transition attribute and boom, done! This is the finish product!

![](/note/created-a-loading-animation-to-my-website-with-svgs/final-result.gif)
