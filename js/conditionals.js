"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


//input-------------------
/*
ask user if they want to enter a number - provide an 'ok' button.
if ok is selected, provide a prompt and then tell them to pick a number.
after number is chosen, provide an alert  saying whether the number is even or odd.
after the  first alert, provide another alert saying what the number is, plus 100.
after the second alert, provide a third alert letting the user know if the number is negative or positive.
after the last alert, if the user has not entered a number, do not display any of the previous alerts.
 */



function isOdd(someNum) {
    if (someNum % 2 === 1) {
        alert("Cool! This number is odd!");
    } else {
        alert("Sweet! This number is even!");

    }
}


function addOneHunnid(numPlusOneHundred) {
    numPlusOneHundred === someNum + 100;
    alert("If you add 100 to this number, it is " + numPlusOneHundred +  ". :)");
}


function positiveOrNegative(someNum) {
    if (someNum > 0) {
        alert("The number is positive! Just like your attitude!");
    }
    else if (someNum < 0) {
        alert("The number is negative. The the creepy photography setting...");
    }
}


function noNumber(someNum) {
    if (someNum === NaN) {
        alert("What were you thinking???");
    }
}


var message = confirm("Would you like to enter a number?");

if (message) {
    var message2 = prompt("What number do you enter?");
    {
    numberDetails(message2)
}
}



function numberDetails(someNum) {

    if (message2 = someNum) {
    isOdd();
    addOneHunnid();
    positiveOrNegative();
    }
    else {
        return noNumber
    }

}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

//1. create a function named analyze color
function analyzeColor(colors) {
    if (colors === 'red') {
        return "Red Rover, Red Rover send Cornelious on over!"
    } else if (colors === "orange") {
        return "Coke Orange really isn't that great, personally."
    } else if (colors === "yellow") {
        return "Don't eat the yellow snow."
    } else if (colors === "green") {
        return "I've never seen anyone's face look so green before..."
    } else if (colors === "blue") {
        return "A blue whale is my spirit animal"
    } else if (colors === "indigo") {
        return "Indigo Plateau is the greatest step in anyone's adventure in Kanto or Jhoto."
    } else if (colors === "violet") {
        return "I'm not entirely sure why violet is after indigo when it is a closer color to blue..."
    } else {
        return "Maybe you should go back to pre-K if you don't know your colors by now..."
    }
}

//2. if a color matches any of the colors in the colors array,
// then return a message related to that color

//3. if a color does not match one of the ones in the colors array, then return a
// message that says so






/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */


analyzeColor(randomColor);
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(colors) {
    switch (analyzeColor(colors)) {
        case (colors === "red") :
        return "Red Rover, Red Rover send Cornelious on over!";
        break;
        case (colors === "orange") :
        return "Coke Orange really isn't that great, personally.";
        break;
        case (colors === "yellow") :
        return "Don't eat the yellow snow.";
        break;
        case (colors === "green") :
        return "I've never seen anyone's face look so green before...";
        break;
        case (colors === "blue") :
        return "A blue whale is my spirit animal";
        break;
        case (colors === "indigo") :
        return "Indigo Plateau is the greatest step in anyone's adventure in Kanto or Jhoto.";
        break;
        case (colors === "violet") :
        return "I'm not entirely sure why violet is after indigo when it is a closer color to blue...";
        break;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

prompt("Pick a color! Any color! As long as it's the right color!");
alert(analyzeColor(randomColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber) {
    if (luckyNumber === 0) {
        return "NO DISCOUNT FOR YOU!";
    } else if (luckyNumber === 1){
        return "Congratulations! Your discount comes out to 10%!";
    } else if (luckyNumber === 2) {
        return "Congratulations! Your discount comes out to 25%!";
    } else if (luckyNumber === 3) {
        return "Congratulations! Your discount comes out to 35%!";
    } else if (luckyNumber === 4) {
        return "Congratulations! Your discount comes out to 50%!";
    } else if (luckyNumber === 5) {
        return "Congratulations! Your discount comes out to... the entire store is FREE! NO LIMIT!!!!"
    } else {
        return "Discount? What discount? I have no idea what you're talking about..."
    }
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
