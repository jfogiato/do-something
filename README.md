# [Do Something.](https://cmon-do-something.vercel.app/)


## Abstract:

[//]: <>

*Do Something* is an application to....well....do something. Whether you're feeling stuck and need and activity to get you out of the rut, looking for a date night idea for your next night out, looking to do something fun with friends, or you're just...bored. *Do Something* is the application you've been looking for. Select your constraints (*type, number of folks, and cost*), find something to do, save it, do it, undo it, delete it...follow your heart.

Your activities will save locally and will be available whenever you need them. Just pop back in and pick up where you left off.

Big thank you to the [Bored API](https://www.boredapi.com/) for providing the content to make this possible. 


## Installation Instructions:

[//]: <>

#### **Deployed Link:**
[Do Something](https://cmon-do-something.vercel.app/)

##### OR

#### **Local Installation**:
1. Fork this repository.
1. Create a local repository.
1. Follow the Github on-screen commands to connect your local repository to your newly forked repository.
1. Run `npm install`, then `npm start` to start the application locally.
1. Navigate to `http://localhost:3000` in your browser to use the application. 
  

## Preview of App:

[//]: <>
![](https://github.com/jfogiato/do-something/blob/main/DoSomethingGifMobile.gif)
![](https://github.com/jfogiato/do-something/blob/main/DoSomethingGif1.gif)
![](https://github.com/jfogiato/do-something/blob/main/DoSomethingGif2.gif)
![](https://github.com/jfogiato/do-something/blob/main/DoSomethingGifDarkMode.gif)

## Context:

[//]: <>

This application was completed as part of the Turing School of Software and Design Module 3 curriculum. It was the last solo project of the Module.

Between Tuesday April 18th and Sunday April 23th 2023, I spent around 25 hours building this application. 

## Technologies Used:

[//]: <>
- React (JS, HTML, CSS)
- Typescript
- React Router for a multi-page interface.
- Cypress for E2E testing.
- RESTful API Integration.

## Contributors:

[//]: <>

[Joseph 'Joe' Fogiato](https://github.com/jfogiato)

  
## Learning Goals:

[//]: <>

The goal of this project was to use the technology I learned over the last month to demonstrate mastery of React, React Router, Asynchronous Javascript, and E2E testing with Cypress. I created personas and user stories to describe my target audience, and then built the application to suit them. 
  
## Wins + Challenges:

[//]: <>

### Wins:

- *Sticking to MVP* - As with any project, it can be tempting to go down CSS-rabbit holes to tweak and perfect every element. In this project, I fought that urge to the very end and stood up the fully functional application with a baseline of styling prior to going back through and getting everything *just right*. 

- *DRY/SRP Code* - I believe that most anyone could come into my codebase and get their bearings quickly. My component `return` statements are clean and any logic-based rendering has been tidied up for maximum readability. Any function that could be reused, was, and logic was handled in a way that minimized code but still showed developer empathy.

- *Responsive Design* - This is the second project where I've greatly emphasized responsive design for mobile use. I adhered to variable, calculated dimensions and created a breakpoint for smaller screens and changed only the classes that needed to be altered. LOTS of trial and error here!

- *Local Storage* - I successfully implemented `localStorage` on this project which I haven't done since Mod 1.

- *Conditional Query Fetch Function* - I'm very proud of the function I wrote in `apiCalls.js` that accepts any combination of queries from the form and uses logic to build and fetch from the correct URL.

### Challenges:

- *Local Storage* - I had a really hard-to-diagnose error when implementing local storage that took quite some digging into to understand and correct. It turned out to be a missing `return` statement (as usual) when conditionally iterating through the stored objects. 

- *Error Handling* - This is the area that I feel most lacking in. Understanding how/when/where/through what means to handle errors is an ongoing challenge for me, though I think I got 75% of the way there in this project.