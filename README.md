# Javascript Challenge : "Data Visualisation"

<img src ="https://www.jstips.co/assets/images/jstips-animation.gif">

- Repository : js-datavisualisation-challenge
  
- Website -  https://jackrob.github.io/js-datavisualisation-challenge/

- Mode: duo

- Type: consolidation challenge

- Duration: 3 days

- Deadline : 17/08/2020, 10h00

## Collaborators: 

- [Robin Jacquemart ](https://github.com/JackRob)
- [Aleksandra Slowik](https://github.com/88aleksandra88)

## Objectives

This consolidation challenge will help you assess your ability to solve a problem inspired from real-life situations using your new javascript muscles involving the following know-hows :

- DOM manipulation
- AJAX/FETCH request
- Using Third-party libraries
- problem-solving : design a logical solution to implement the expected result
- Debugging using the console
- Understand the notion of "separation of concerns"

# Mission

You work in the Multimedia department of one of the European Union institutions. This morning, Johnny Hasnoclew, your Project Manager, sends you on a mission: one of the in-house journalists has published a new article on the institution's website. The article in question is already integrated with an html / css / Javascript file.

He asks you to make it more rich, more interactive, more... sexy (The use of that specific adjective indicates that Johnny certainly worked in advertising before, the poor guy).

That's exactly what you're going to do, by adding two interactive data visualisation graphics using javascript. These graphs will be interactive in the sense that the user can manipulate the graph, such as filtering data, or reveal detailed data when the mouse hovers over it. You are free to design the interaction in your project.

- Inline data (data in the document)
In this html file, you will find two data tables. Use JavaScript to traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.

If javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears between the title and the table.

- Remote data, in real-time, via ajax
There are data sitting at this URL : https://canvasjs.com/services/data/datapoints.php

Retrieve the data via Ajax, and use it to insert a graph that refreshes every second, just below the main title (h1) of the article.

Don't hesitate to adapt the code provided in this tutorial: Live Updating Charts from JSON API & AJAX, but adapt it to this third-party library: chart.js or ToastUi-Chart, because this tutorial uses another (not-free) library (canvasJS).

Again: if javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears.

# How 

- Use a javascript library that makes it easier to do this instead of using just "Vanilla Javascript" (= using javascript without libraries). If you had never coded in javascript before BeCode, use chart.js or ToastUi-Chart. If you already had a good knowledge of Javascript before you switched to BeCode, you can directly use the D3.js - Data-Driven Documents library, which is more complex but offers many possibilities.

- Get trained in their use.

- Attack the problem by looking for a good logical path. Break it down into small problems, into progressive steps. Commit as you move forward. First the DOM, access the right place, then retrieve the data, then generate the graph. Something like that 😉
A method of thinking: Reverse-engineering of your objective: start at the end and go up the thread of dependencies to the starting point. It gives something like this:
