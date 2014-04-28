---
title: Teams, not Groups
author: joemercer
date: 2014-04-27 16:00
template: article.jade
---

In my first interview with [Noom](http://www.noom.com/) we discussed the implementation of a support group feature (a la Weight Watchers or Alcoholics Anonymous but online). The problem: how do we divide Noom's user base into manageably sized groups of similarly minded people?

<span class="more"></span>

In my first interview with [Noom](http://www.noom.com/) we discussed the implementation of a support group feature (a la Weight Watchers or Alcoholics Anonymous but online). The problem: how do we divide Noom's user base into manageably sized groups of similarly minded people? This isn't a new problem, and the algorithm we created was essentially a [k-means clustering](http://en.wikipedia.org/wiki/K-means_clustering) variant, a well-known algorithm used in data mining for spotting trends.

First we vectorize the data; we think of each user as being a point in a multi-dimensional space of attributes, such as age, location, etc. For added flexibility we can even think of each user as being a weighted average of attribute vectors. This reflects the idea that some attributes are more influential in our definition of a user.

The algorithm starts by arbitrarily choosing k "means", or points in the vector space, and then alternates between two steps:

1. Assign each data point to the mean that it's closest to.

2. Calculate the new means by choosing the centroid (center) of each cluster.

For example, in two dimensions (imagine a two dimensional scatter plot) this algorithm essentially draws circles around each mean such that every data point is contained within a circle, and then takes the center of each circle to be the next mean. As the algorithm runs through iterations, the circles move to fit more closely to the clusters in the data.

For Groups at Noom, this algorithm works great because support groups work best with similar types of people - people that can relate and empathize easily with one another. But when you're choosing a team you don't want similar types of people. In fact, in many ways you want very different types of people - for example one player that's a good rebounder and another that's a good passer.

At the University of Waterloo, the engineers have a fourth year class slot dedicated for a design project. This year a group of Management Engineers built an optimization model for [dividing people onto teams](https://uwaterloo.ca/management-sciences/sites/ca.management-sciences/files/uploads/files/group_03_-_daniel_kocubej_srabotnjak_-_mar_20_2014_1238_pm_-_smart_match_poster_v1.1.pdf) so as to balance skill sets while maximizing for optimal personality conditions.

First, each person in the pool has to take a personality quiz and a skills assessment. The personality quiz evaluates each person in the [big five personality traits](http://en.wikipedia.org/wiki/Big_Five_personality_traits): openness, conscientiousness, extraversion, agreeableness, and neuroticism. These are well-known to Organizational Psychologists and it is generally accepted that teams function best with less diversity in conscientiousness and agreeableness, but more diversity in extraversion (openness and neuroticism are regarded as not influential factors in team success). The skills assessment is domain specific for the types of teams that are being created, and can be computed in many different ways. In the simplest model, the skills assessment simply asks candidates to rank themselves in a list of skills.

The optimization algorithm then runs by checking every possible combination of team assignments against a set of constraints, scoring it against an objective function, and returning the team assignment that passes all the constraints with the optimum score. The flexibility in an optimization model comes from being able add constraints and alter the objective function. For example, a constraint can be added that requires each team to have at least a minimum threshold of each skill set.

Can an algorithm create a team better than a manager can? It seems unlikely. Only a human can judge the indefinable qualities that make for strong relationships and cohesive teams. Sure, an algorithm might provide some interesting insights that a human could use as part of the decision making process, and I think this would be a useful application to think about, but I'm going to start in a different direction.

There are conditions where I think an algorithm can be better at choosing teams than a manager:

1. There are a lot of people, and a lot of teams
2. The people are relatively unknown to one another

The first example I could think of was on campus housing at university. The second was the military. 

Often under conditions like these, teams get made with very little thought, or even completely randomly. This isn't necessarily terrible - an algorithm can't be much better at predicting future best friends than flipping a coin - but little wins add up over time. Even if we can only improve the chance of roommates getting along by 5%, over the course of a thousand room assignments we'll make a major positive influence in 100 lives (or 150 if you go to UCLA! - jokes). And we've seen (Microsoft, Facebook) some of the things that can happen when roommates in college get along.

The way I envision such a system is it takes a large number people, facilitates the collection of data, and uses this data to assign them to teams based on existing knowledge about observational psychology and domain specific knowledge about the tasks and goals of each team. The team breakdown, and summary can be nicely presented to a manager for a final look-over, along with a set of tools for manipulating the teams and seeing the changes in stats. If more finely grained personality information about the people can be collected than additional software could even predict potential relationships to watch out for, either positively or negatively (although we should not let information like this result in a self-fulfilling prophecy).

The first problem to tackle in creating a system like this is the scale. The optimization model developed by students at the University of Waterloo takes upwards of three hours to run on a sample size of 30 into groups of 3. Running it on a sample size of a 1000, or 10000, wouldn't be feasible. I'll leave a discussion the ways we can use mathematics and heuristics to approximate optimization models for a later blog post.