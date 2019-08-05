"use strict"

console.log("Hello from external Javascript");

alert("Welcome to my website!");

var userInput = prompt("What is you're favorite color?");
alert("Great, " + userInput + " is my favorite color too!");


//UNDO THE COMMENTS ABOVE!!!


//     Use the alert function to show a message that says 'Welcome to my Website!'.
//
//     Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//
//     For example, if the user enters "blue", your code should alert a message that says:
//
//     "Great, blue is my favorite color too!"
//
// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values,
//     the goal of these exercises is to understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules
//     (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var littleMermaidRentalDays = prompt("How many days was the Little Mermaid rented for?");
var brotherBearRentalDays = prompt("How many days was Brother Bear rented for?");
var herculesRentalDays = prompt("How many days was Brother Bear rented for?");

var total = Number(littleMermaidRentalDays) + Number(brotherBearRentalDays) + Number(herculesRentalDays);
console.log(total);

alert("Your total comes out to: $" + (total * 3));



//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400,
//     Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and
//     4 hours for Amazon.

var googleHourlyWage = prompt("What is the hourly wage from Google?");
var amazonHourlyWage = prompt("What is the hourly wage from Amazon?");
var facebookHourlyWage = prompt("What is the hourly wage from Facebook?");

var hoursWorkedAtGoogle = prompt("How many hours did you work at Google last week?");
var hoursWorkedAtAmazon = prompt("How many hours did you work at Amazon last week?");
var hoursWorkedAtFacebook = prompt("How many hours did you work at Facebook last week?");

var totalTwo = (Number(googleHourlyWage * hoursWorkedAtGoogle) + Number(amazonHourlyWage * hoursWorkedAtAmazon) +
    Number(facebookHourlyWage * hoursWorkedAtFacebook));

if(totalTwo < 1000) {
alert("You're poor! You only made $" + totalTwo) }
else { alert("You're making bank with $" + totalTwo + " this week!"); }

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var fullClass = prompt("Is the class you want already full?");
var scheduleConflict = prompt("Do you have another class scheduled at this time?");
var studentCanEnroll = !fullClass && !scheduleConflict;

alert("Your enrollment status this semester is " + studentCanEnroll + "!");

//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to
//     buy a specific amount of products.

var isPremiumMember = prompt("Are you a premium member?");
var isDateExpired = prompt("Is the expirey date expired?");

var itemsPurchased = prompt("How many items do you have?");


var offer = !isDateExpired && itemsPurchased || isPremiumMember;
alert("This offer is " + offer);
