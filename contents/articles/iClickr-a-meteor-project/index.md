---
title: iClickr - a Meteor Project
author: joemercer
date: 2014-01-12 02:00
template: article.jade
---

For the 11th UWaterloo Software Engineering hack day I decided to work with my friend Nicole to make a multi-platform responsive web app that could replace the pesky iClickers that first year students are required to waste $40 on.

<span class="more"></span>

I always find programming easier in the abstract however so we ended up building more of a multi-platform, responsive, reactive, realtime virtual classroom. There are many potential features. For example, the stoplight idea, where students can be in one of three states, green, yellow, and red, to indicate whether the prof should continue, slow down, or stop. Another feature would be allowing profs to ask questions to their students and then collect those answers back in realtime and display them on charts. Another feature would be to enable students to post comments and questions in a chatroom and then potentially answer one another's questions without having to stop the flow of a lecture by asking a question.

Since this was a Hackathon we only had a day to make this application, but we wanted to make it a full-fledged application (not just a series of screenshots and a flashy presentation). Nicole has experience with design and I have experience with full stack JavaScript architectures and between the two of us we have the skills to build a legitimate app in a day.

To do this we decided to use Meteor js, which is a framework for building web apps super quickly. It comes with it's downsides, one of which is being super opinionated and particular when it comes to doing front-end things (which can prevent you from being able to do them in the traditional style), but it also comes with many huge benefits. One of these benefits is to provide data connectivity throughout the entire stack, from database to client. Another is to provide an easy hosting solution. I could keep going on, but I won't.

We didn't end up finishing our app, mainly due to problems with integrating design mock ups and Meteor functionality. We did finish a full set of design mock ups, and a fully working (but unstyled) Meteor application. Hopefully we can carve out some time in the future to bind them together.

In the course of building this project I learned more about the Meteor Accounts system with the help of this [screencast](https://www.eventedmind.com/feed/97d0164c-8f71-46fe-819b-df8df3704546) and this [tutorial](http://meteorhacks.com/extending-meteor-accounts.html). I also got more practice with structuring Meteor apps, especially from a server-side perspective.

I'll try to remember to update this with a link to the hosted website when it's finished. For now, the code can be found on [github](https://github.com/joemercer/iclicker).