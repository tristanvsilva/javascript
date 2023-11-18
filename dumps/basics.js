// String
let myVariable;
myVariable = "Bob";

let variableTest = "Bob";

// Number
let myNumber = 10;

// Boolean
let myBoolean = true;

// Array
let myArray = [1, 'Bob', 'Steve', 10];

// This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn.
// conditionals

let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
} else {
    alert("Awwww, but chocolate is my favorite…");
}

// functions

let mySelector = document.querySelector("h1");
alert("hello!");

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(4, 7);

// Events
// Real interactivity on a website requires event handlers
// The function we just passed to addEventListener() here is called an anonymous function, because it doesn't have a name. There's an alternative way of writing anonymous functions, which we call an arrow function. An arrow function uses () => instead of function ():

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});

