 ---
templateKey: blog-post
id: CF2019-Haxplore-Hacking-A-MVP
title: 'Hacking away an MVP in 24 hours'
description: 'How I spent a weekend building product from scratch in an awesome team and winning it!'
date: 2019-08-26T20:19:47.156Z
slug: /medium/codefest19-hacking-mvp-ca7dcf329208
headerImage: https://cdn-images-1.medium.com/max/2560/1*K9Z-b-LPo60LFSUkl-mrUg.png
tags:
  - Hackathon
  - WeekendOfCode
  - CodeFest
  - AWS
  - TeamWork
  - WebSockets
  - ML
  - Django

---

Do you know what's more exciting than building an awesome product from scratch with your own hands? Doing it in 24 hours with an awesome team, mixed with lots of food and drinks! That's how my friends and I spent our weekend at the [CodeFest 2019 HaXplore](https://codefest.tech/haxplore) event - a 24-hour long hackathon event organized at our college. We were the team **Traceback**, a group of 3 people - [Amritansh](https://github.com/Eerie16), [Shravan](https://github.com/BAJUKA) and [me](https://shivanshs9.me/).
It was a most memorable experience; something which I really wanted to share with the help of my pen (technically, keyboard :D).

### tl;dr
Jotting down some important points here as tips:
- **Focus on the judging criteria** and ensure you're finished with all the pre-requisites, before actually starting to code. 
- **Narrow down the idea** so it can be visualized with just 2 line summary and satisfies the problem statement.
- Avoid building something heavy, like an android app with such time constraints. **Hackathons requires fast iterations** and last-minute working commits. Make sure your chosen platform can handle that!
- **Never boast more than you can chew!** The judging does get intensive sometimes, so make sure you know what you've implemented.
- **Never lose out on your passion!** To keep it driving, take breaks from code - enjoy the weather, take selfies, network with participants, have fun with the organizing team and *eat* (that's the primary reason I attend hackathon).
- Be confident in presentation and **do your homework**!

**Code:** https://github.com/Eerie16/haxplore-traceback  
**Website**: http://agriconnect.ml/

### Ideation phase (24 hours to go)
As we were told of our problem statement, I had my pen ready to jot down the 4 tracks we were given along with listing and then cutting out some hunches. After all, if these ideas came so easily to me, I can't really not expect any other team to think of it too. We were also given AWS credits and informed beforehand that using AWS services rewards brownie points.  
Soon enough, our team went to our desk and brainstormed over possible ideas. Since we had 4 different tracks to pick from, the sample space was really too vast. After thinking and dropping many ideas, we came down to a set of 3 and then chose one with the most impact, fulfilled all the brownie points and could be developed within the time constraint of 24 hours (technically, now less).  
We called it **FarmConnect** at that time, btw - *a web app connecting and empowering farmers through digital technology and AI*.

![Quite a lame name, I know](https://pics.me.me/hello-my-name-i-s-lame-o-44142971.png)

### Coding Phase (23 hours to go)
We listed out the requirements, planned our work distribution among us three and booted up our respective OSes! I started working on the ERD and the models sufficient for all the planned features. Using Django (well, it *is* for perfectionists with deadlines :D), I was done with all the models and authentication merged with the template and frontend work done by my teammate, Amritansh. Meanwhile, Shravan had finished with the AWS Lex Bot implementation and collected all the needed dataset.  
After a needed break with some light snacks and a trivia quiz, two of us started crossing out the features due to implement and Shravan hacked away an ML model at Jupyter Notebook of AWS SageMaker. Time for Mid-Review now!

### Mid-Review (15 hours to go)
Our Github Mentors discussed the idea and the product we've built so far. He liked the idea, but he raised a valid issue over two of the implemented features:
- we've been exposing user's contact number to other logged-in users, which could lead to spam etc. Now that feature really required to bring out the communication between farmers, so we thought of an in-built chat.
- scalability of our bot in its responses and the amount of knowledge it can have. Since we didn't have a structured kind of data for it, we couldn't think of any way to use it in a quality and scalable manner.
So with two of our features down… what are we to do in the next 14-ish hours? Well, we pushed our concerns aside and went to have an awesome dinner of Pizzas and drinks!

### Coding Phase (13 hours to go)
Well, we planned our next steps in the midst of the cool night breeze with our stomachs packed. First of all, I amped up my team's confidence by mentioning that I can indeed complete the chat feature by morning. And that we'll be focusing essentially on community and crowdsourced data, rather than some pesky bot. But to truly exhaust our options, Shravan did spend time on an API for bringing in the soil & weather data, whereas Amritansh wrapped up all the other features. I essentially focused on the bidirectional chat thingy I need to implement - put up a bootstrap template in an iframe, switched to ASGI server and implemented essential Chat models (after an ERD, of course! :D).  
I did have to put it on hold and spent time on exposing our built model to WWW using AWS Lambda functions and API gateways. After some annoying authentication token bugs, the request passed using Postman.   
In 4 hours, I was ready with a WebSocket code at client-side and an async consumer in the backend. However, as expected, new code means new error and somehow the WebSocket connection couldn't remain connected for more than a second. I went to take a coffee break (2, actually), woke up my teammates and fixed up the connection bug by shifting to synchronous code (I know, ouch). It worked and I had an hour remaining to finish up the chat.

### Coding Phase (6 hours to go)
Technically, I was 2 minutes late with a working chat, but meh. With almost all core features done, we moved on to using the ML API in the frontend, but faced the grave CORS error on localhost origin.

![CORS sucks!](https://pics.me.me/ajax-request-api-cross-origin-request-blocked-the-same-origin-polic-42771586.png)

Okay, I believe I know CORS very well, but I definitely didn't expect this error to pop up with all correct OPTIONS response headers and request headers. Finally, I indeed manage to solve it by first converting our JSON data to string in request 😫.  
Finally, with an extra bug in rendering chart of floating data solved, I moved on to deploying the site on AWS EC2 with less than 4 hours remaining. Created new AWS RDS, messed around with security group rules to make it accessible by EC2, installed Redis and all requirements on an EC2 instance, and managed to expose the web service on a free domain. And we still had time left! So we changed the name to **AgriConnect** and got this app a logo!

### Coding Phase (<2 hours to go)
With our minds tired from unrest and our stomach happy with some light breakfast, we set out on polishing up our app with much-needed bug fixes, UI improvements and adding some small cool features (which actually created new issues to solve - a vicious cycle). Shravan wrapped up the pitch, we finished our GitHub repo and our work submission in the form of [an issue](https://github.com/codefest-iit-bhu/haxplore-submissions/issues/14). With 3 minutes remaining from the deadline, we pushed our last commit as a bug fix and… all done! 😄

### Judging Phase
After the intense coding round, we rested for an hour before we had to prepare for project presentation. Shravan finished the PPT in 15 minutes and we discussed all the possible questions amongst ourselves. After our pitch, the judges grilled us on the tech stack, especially the AWS services used. They asked questions related to scalability, ease of interface for farmers, offline use etc.

### Verdict
If you're still with me, would you like to know something even more exciting than building a product from scratch in an awesome hackathon? Well, it's winning the event for sure! And indeed we did win the first position *and* prize money of INR 35, 000. The selfies of the team with the prize were worth all the hard work we did and sleep we sacrificed. It was really an awesome experience!! 🎉

I encourage everyone to never miss out on showcasing your passion as a member of Dev community and to participate in such events to show your swags (I mean your laptop stickers, of course! :D)
