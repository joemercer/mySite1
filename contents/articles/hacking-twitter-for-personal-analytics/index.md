---
title: Hacking the Twitter API
author: joemercer
date: 2014-01-18 19:00
template: article.jade
---

For the past while I've been playing around with an idea for a personal analytics system built on Twitter. Such a system could be used to log events in your life for programmatic access later.

<span class="more"></span>

It seemed a little funny to build a personal logging platform on Twitter, a service for public conversations, but it had a certain elegance that kept nagging at the back of my mind. Conceptually I think Twitter is more than just a massive global conversation. It's a hundred million intimate timelines, documenting unique, independent lives. Currently all of this data exists, but it isn't being framed in a useful way. It's not "query-able".

Today I started working on an application to capture this data. In the abstract, it ties together multiple event streams and aggregates the logs in a queryable data structure. It's kind of like [Twitter Storm](http://storm-project.net/) as a service.

In practice however we have had to introduce some limitations in order to make this idea feasible. We're limiting the source to just Twitter, and logs to just a couple different types. Also due to scalability and us not wanting to spend money, we'll probably end up limiting the users to like 5, or 10. We'll see.

We built the service on [Express](http://expressjs.com/) using [Mongo](http://www.mongodb.org/) as the database. We hosted it all on [Heroku](https://dashboard.heroku.com/) using [MongoHQ](http://www.mongohq.com/home). We're also making heavy use of the [Twitter (streaming) API](https://dev.twitter.com/docs/streaming-apis) and [OAuth](https://dev.twitter.com/docs/auth/oauth). We don't have a front-end (i.e. it's vanilla and just used for development). One of the benefits of using the Express + Mongo + Heroku stack is that everything is super well documented so getting up and running didn't take much time at all. And of course everything so far has been free. 

At this point we have the basic infrastructure pieces in place, but we need to smooth out the edges before implementing any business logic. Hopefully we'll have something working end to end in the next couple days.