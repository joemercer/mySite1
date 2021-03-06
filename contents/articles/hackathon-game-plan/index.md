---
title: Hackathon Game Plan
author: joemercer
date: 2014-02-07 20:00
template: article.jade
---

I've done a couple hackathons in my life, and I'm starting to settle into a routine. Here are my thoughts...

<span class="more"></span>

I think hackathons are great for many reasons, not the least of which is the time constraint. Because hackathons have to be completed in a short amount of time, it's important to have pre-existing structures in place in order to maximize efficiency. And these pre-existing structures should include, among other things, a game plan.

An important part of having a game plan is having a team. A large part of the game plan is pre-deciding the responsibilities of each teammate, and assigning them in such a way as to cleanly seperate the functionality so that it can be developed in parallel. This also has the benefit of eliminating (or drastically shortening) the time spent at the beginning creating and divvying up tasks. A preset team with a game plan can get right to work without having to assess each team member's skills and debate on who should do what.


Another important part of a game plan is having an idea of what technologies you're planning on using. This lets team members study up on technologies before starting, or even better build skeleton (or seed projects) to extend from for even faster development. It also prevents discussions about which technologies to use from wasting time at the beginning.

Having said that having a team and an idea of the technologies you you plan on using is important, I feel like I should mention that many people go to hackathons with the goal of working with new people, or learning new technologies. I think these are perfectly viable goals, but my experience has taught me that neither of them mix well with getting a lot of cohesive work done. This introduces, however, the very important concept of goals.

### Step 1: Figure Out What Your Goal Is

The first thing that you should do, before any of the more glamorous steps, is figure out what it is that you're hoping to get out of this hackathon. Are you trying to win? Learn new technology or language? Get a job? Whatever it is, you should have a clear idea of what it is because this knowledge will be the primary driver throughout the experience.

### Step 2: Figure Out Your Team / Team Goal

Assuming that you already have a team in mind, it's important to make sure that the entire team is on the same page. If one teammate's goal is to learn new technology and another teammate's goal is to win, I can guarantee that after a night of no sleep conflict will start to emerge. That isn't to say that teammates can't have different goals, as long as everyone clearly understands and agrees with the team's goal, and with each other's goal. If your goal doesn't mesh well with the rest of your team, then, as excited as you may be to work with these people, I would suggest that you find a different team that can support your goal's better. The most important thing to remember in this step is to be honest with yourself and with your team.

### Step 3: Brainstorm an Idea

This idea should be heavily influenced by your team's goal. If your team is trying to impress recruiters in order to get a job, then choose an idea that will play to your strengths, and perhaps that will include domain specific teasers to incite follow up conversation.

As with the team goal, it's very important that everybody has a consistent vision of what the idea is (at least for the scope of the hackathon). This consistency should notably trump finding a "good idea." In other words, it's much better to have a consistent idea than a good idea.

When choosing an idea it's also important to be mindful of your team's potential. Choose an idea that you'll be able demo in some meaningful way at the end of the hackathon.

### Step 4: Decide On The Technologies

Before the hackathon starts you should read up on them, and perhaps even wrap them together in skeleton app so that you don't have to start your hackathon by setting up infrastructure. For example, if your idea includes Payments, figure out what Payments platform you're going to use, set up an account, and handle all the logistical stuff before the hackathon starts. 

### Step 5: Do the Hackathon

Everything up to this point should have been done sometime between a week and a day before the hackathon so that once you reach this point everything it ready for you to start building the product right away. The way you approach this is very dependent on your team, but I'll discuss it in the context of my past experiences.

#### Step 5.1: View Flows and Data Model
- It's super important that these are very transparent to everybody on the team
- Nothing causes more mistakes than not being on the same page as everybody else when it comes to what everyone is building

#### Step 5.2: Mockups, Routes (partials), and a Database
- Mockups will guide the modularity of future templates
- Routing will define the user flow and provide a blank slate for building views
- The database will define the data relationships 

#### Step 5.3: Accounts, Models and a Bootstrap file for pre-loading the database with test data
- It's worth figuring out something simple like FB OAuth as a quick way for distinguishing the people using your app
- Don't slack on the Bootstrap file; even good apps look awkward without any data in them

#### Step 5.4: Templates and Event Handling
- Ideally make templates reuseable and modular so that they can easily be styled

#### Step 5.5: Figure out Hosting
- Super important, make sure that your app is live so that people can check it out

#### Step 5.6: CSS and app-specific hooks (Payments, Security)
- Not super necessary, but makes a huge difference to the overall quality of the app
- This is basically the step that takes your app from being a couple pretty pictures and a proof of data flow to being a fully functioning application

#### Step 5.7: CSS Polish and Additional Features
- Optional step, definitely de-prioritize over testing

#### Step 5.8: Testing and Demo Preperation
- Save at least three hours for this
- Make sure that you have something demo-able
- Make sure that it won't crack under pressure (lot's of users, slow wifi)
- Prepare and practice your demo beforehand; make sure it fits in the time limit

#### Step 5.9: Relax and hype it to the crowd
- This will help prepare you for your demo by testing your app's ability to handle unexpected user behavior, and by forcing you to explain your idea many times

You keep in mind a couple other things:
- Sleeping is much better than getting nothing done because you're tired
- Eating junk food and drinking energy drinks is like gambling with your energy levels and should be done mindfully
- Take breaks to clear your head (go for a walk, play ping pong, etc)

### Step 6: Celebrate and Unwind

After the hackathon is over (especially if you win) you might be filled with an energy and feel inspired to start making plans for future projects or hackathons. Don't. Everybody is tired, nobody is thinking clearly, and there is high likelihood that you'll say something you don't mean which create conflicts later. Celebrate in the abstract; talk about the cool ideas that other people pitched, or the neat features that you implemented. Congratulate everybody. Save the truly critical reflection for a later day.

### Step 7: Retrospective

Get the team back together and reflect on the experience. What worked well? What didn't work well? How can things be improved next time? I think this step is super important because it will prevent you from making the same mistakes twice. Furthermore it can be enlightening to hear the perspectives of your teammates.

The end. Go back to regular life.