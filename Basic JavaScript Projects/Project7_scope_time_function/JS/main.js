// Global Variable Use
var beers = 6; // Available to entire program
function drinkBeer() {
    beers = beers - 1;
    document.getElementById("leftover").innerHTML = "One down, " + beers + " to go.";
}
function buyMore() {
    beers = beers + 6;
    document.getElementById("more").innerHTML = "Now you have a " + beers + "-pack.  Let's party!"
}

// Local Variable Use and Console De-bugging
function numAdd() {
    x = 6;  // Only available in this function
    document.getElementById("result").innerHTML = (x + 12);
    console.log(12 + x); // See results in console for de-bugging
}

function numSubtract() {  
    document.getElementById("result").innerHTML = (x - 6);  // "x" is not available and causes error
    console.log(x - 6);  // See results in console for de-bugging
}

// Using If Statements
function timeOfDay() {
    var x = new Date().getHours();  // Get current time in hours
    console.log(x); // Display to console for testing
    if  (x < 12) { // Morning greeting
        document.getElementById("message").innerHTML = "Good Morning!";
    }
    if (x >= 12) { // Afternoon greeting
        document.getElementById("message").innerHTML = "Good Afternoon!";
    }
    if (x >= 18) {  // Evening greeting
        document.getElementById("message").innerHTML = "Good Evening!";
    }
}

// Using If-Else Statements
function decide() {
    var wx = document.getElementById("conditions").value;
    if (wx == "sunny") {  // GO
        document.getElementById("decision").innerHTML = "Go have fun!";
    }
    else {  // NO-GO
        document.getElementById("decision").innerHTML = "Forget about it."
    }
}

// Using Else-If Statements
function timeOfDay1() {
    var x = new Date().getHours();  // Get current time in hours
    var greeting;  // Store the greeting for return
    console.log(x); // Display to console for testing
    if  (x < 12 == x > 0) { // Morning greeting
        greeting = "Good Morning!";
    }
    else if (x > 12 == x < 18) { // Afternoon greeting
        greeting = "Good Afternoon!";
    }
    else {  // Evening greeting
        greeting = "Good Evening!";
    }
    document.getElementById("newMessage").innerHTML = greeting;
}