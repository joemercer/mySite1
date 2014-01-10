---
title: This Site - Part 2
author: joemercer
date: 2014-01-09 23:00
template: article.jade
---

This website uses [LESS](http://lesscss.org/), [Bootstrap](http://getbootstrap.com/), [FontAwesome](http://fontawesome.io/), and a library that I wrote called [Golden](http://joemercer.github.io/golden/). Golden is a CSS library with a typography, gray scale, and grid system inspired by the [Golden Ratio](http://en.wikipedia.org/wiki/Golden_ratio).

<span class="more"></span>

The reason I chose to base the spacing and typography in my website off the Golden Ratio is somewhat arbitrary, but certainly no less arbitrary than the strategies of other designers. In terms of typography, the font-size, line-height, and line-width of paragraphs are all [based on the Golden Ratio](http://www.pearsonified.com/2011/12/golden-ratio-typography.php). As you're reading this you can be aware of the pleasing proportions of the text. You can also be aware of the pleasing proportions of the color, as the text color is related to both pure white and pure black by the Golden Ratio.

Most of the common boilerplate CSS that goes into websites ([Normalize](http://necolas.github.io/normalize.css/), basic grid, etc), I'm pulling from Bootstrap. Instead of pulling Bootstrap from a CDN, as I did for FontAwesome, I did fork the project so that I could create a [custom version of Bootstrap](http://coding.smashingmagazine.com/2013/03/12/customizing-bootstrap/). This has the downside of not hitting on a version that's been cached prior in the user's web page, but has the upside of letting me eliminate any unnecessary code. Currently I'm only using about 7 of the 40 or so Bootstrap modules, and the compiled and minified CSS is about 80% smaller. Another benefit is that as I have a need for additional Bootstrap modules I can import them later.

To make my life easier I also incorporated [Grunt](http://gruntjs.com/) for concatenating and minifying my CSS. I haven't yet found out a good way to have multiple deployment levels (dev, stage, prod, etc) and serve un-minified assets on dev while serving minified on stage and prod, but that's on the to-do list and [Grunt Watch](https://github.com/gruntjs/grunt-contrib-watch)/[Grunt LESS](https://github.com/gruntjs/grunt-contrib-less) are still useful in development to re-compile my code as I update it. 

I still need to include some new pages, like a resume, and add further styling for the article and archive pages. We'll see what interesting thing pops up for Part-3.