// Add two numbers
function addNums() {
    var bakers = 12 + 1;
    document.getElementById("math").innerHTML = "If you have a \"Baker's dozen\", you have " + bakers + " of something.";
}
// Subtract two numbers
function minusNums() {
    var age = 2021 - 1968;
    document.getElementById("math1").innerHTML = "Someone born in 1968 will be " + age + " years old in 2021.";
}

// Multiply two numbers
function timesNums() {
    var eggs = 2 * 365;
    document.getElementById("math2").innerHTML = "Eating 2 eggs every day equals " + eggs + " in an entire year.";
}

// Divide two numbers
function divideNums() {
    var beers = 24 / 8;
    document.getElementById("math3").innerHTML = "A case of beer will supply a party of 8 with " + beers + " beers each.";
}

// Use multiple math operations
function manyNums() {
    var earnings = ((500 + 100) / 2) * 1.1 - 100;
    document.getElementById("math4").innerHTML = "You would have $" + earnings + " left in the bank.";
}

// Use a modulus (remainder) operation
function modNums() {
    var cookies = 24 % 5;
    document.getElementById("math5").innerHTML = "If you divided your 24 cookies amongst 5 friends, there would be " + cookies + " left for you to eat.";
}

// Use a unary operation
function unNums() {
    var opposite = 15;
    document.getElementById("math6").innerHTML = "The opposite of the number 15 is " + -opposite + ".";
}

// Increment a number
function incrNums() {
    var day = 5;
    day++;
    document.getElementById("math7").innerHTML = "Tomorrow will be the " + day + "th.";
}

// Decrement a number
function decrNums() {
    var day = 5;
    day--;
    document.getElementById("math8").innerHTML = "Yesterday was the " + day + "th.";
}

// Generate a random number and utilize Math object
function randomNums() {
    var lucky = Math.round(Math.random() * 100);
    window.alert("Your lucky number is:  " + lucky);
}