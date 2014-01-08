---
title: This Site - Part 1
author: joemercer
date: 2014-01-08 9:00
template: article.jade
---

This website is created using a static site generator called [Wintersmith](http://wintersmith.io/). For those in the know, Wintersmith is kind of like [Jekyll](http://jekyllrb.com/) but built with JavaScript on Nodejs instead of with Ruby on Rails. As a full-stack JavaScript programmer myself, this seemed like the perfect solution.

<span class="more"></span>

So far, I've found that static site generators provide two useful functions:

First, they provide a web server for hosting your website locally (which is helpful for development). As you might be able to expect, Wintersmith uses [Nodejs](http://nodejs.org/) as its local web server, and so far it's worked perfectly out of the box. To get it started just run the `wintersmith preview` command.

Second, they include templating. By default, Wintersmith uses [Jade](http://jade-lang.com/) for templating and either [Markdown](http://daringfireball.net/projects/markdown/) or [JSON](http://www.json.org/) for content. Jade was new to me, and I'm not completely sold on it yet. Yes, Jade is much quicker than writing plain HTML (or a templating language like Handlebars that doesn't abstract away the HTML), but when using extends and blocks it's reliance on indentation can get confusing. To make debugging even more difficult, I've found that the documentation for Jade tends to lag behind its full feature set. Regardless, part of the reason I'm making this website is to experience new technologies so I'm going to stick with it for now. I've been using Markdown for a while now in the context of Github, and I am completely sold on using it more. Markdown is a text to HTML converter that stores it's plain text in an easy to read format. Markdown works great for content sections, like this article, but when you need access to content in a more data-y fashion, Wintersmith also supports using JSON.

After choosing Wintersmith as my framework, my second step was to push what little I had of my website live. As I was researching different hosting solutions my main goals were to find something cheap and quick. After shopping around I decided to host the website on [Github Pages](http://pages.github.com/), and use [Wercker](http://wercker.com/) as the delivery platform following [this blog post](http://luke.vivier.ca/wintersmith-with-wercker/).

Using Github Pages to host my website is nice because I'm already using Github to host the code. Everything can be found in one compact area. The only hiccup came along when I decided to create a Github personal page instead of project page. I did this because the personal pages make to username.github.io instead of username.github.io/project, and I like conserving space. Other than the url, the only difference between a personal page and a product page is that a personal page is build out of the master branch whereas a project page is built out of the gh-pages branch. As a result I've created a stage branch that would serve the normal purpose of the master branch.

Wercker is an awesome tool that lets you define build and deployment steps that run off in the cloud. Right now I'm just using it to run the `wintersmith build` command, and then push the built assets to the master branch, but eventually I'll add in asset minification and other goodies.

The brilliant part of everything is that my workflow is dead simple:
1. Branch off of stage
2. Work
3. Merge feature branch into stage
4. Done - Wercker handles building the website and pushing it to the correct location so at this point I can see my changes live on my website


After pushing everything live, my third step was writing this blog article : )

Next I need to incorporate some additional pages, including a resume, and begin custom styling. I'll write about this experience in Part 2 of this series. 