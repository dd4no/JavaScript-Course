// WHILE Loop
function callLoop() {
    var counter = 0;  // Initialize counter
    var line = "";  // Initialize content
    while (counter < 2) {  // While counter is less than 2,
        line += "I am the eggman...<br>";  // add the string to the content and
        counter++;  // increment the counter
    }
    line += "I am the walrus."  // Add a new line to the content
    document.getElementById("loop").innerHTML = line;  // Display the accumulated content
}

// String length property
function getLength() {
    var text = document.getElementById("quote").innerHTML;  // Assign variable the string in the id
    var length = text.length;  // Assign the character length of the string
    document.getElementById("length").innerHTML = length;  // Display the result
}

// FOR Loop
function callLoop1() {
    var text = document.getElementById("quote").innerHTML;  // Assign variable the string in the id
    var newText = "";  // Initialize content
    var i;  // Initialize counter
    for (i = 0; i < text.length; i++) {  // Starting at zero, loop through the string indices, and increment the counter each iteration
        newText += text[i] + " &nbsp; ";  // Add the value of the character at the index plus space
    }
    document.getElementById("spaced").innerHTML = newText;  // Display the content
}

// Arrays
function getAlbum(x) {
    var albums = [];  // Declare an array
    album[0] = "Pink Floyd - Dark Side of the Moon";  // Add elements to the array
    album[1] = "The Beatles - Rubber Soul";
    album[2] = "Nirvana - Nevermind";
    document.getElementById("album").innerHTML = "You picked:<br> \"" + album[x] + "\"<br>Let's groove!";
    // Display array element at index specified by user
}
// Constants
function plane() {
    const airplane = {type:"single-engine", make:"Cessna", model:"172"};  // Declare an object with properties and values
    airplane.model = "182";  // Change a property
    airplane.style = "high-wing";  // Add a property and value
    document.getElementById("plane").innerHTML = "The " + airplane.make + " " + 
        airplane.model + " is a " + airplane.type + " airplane, with a " + airplane.style + ".";
    // Display the values of the object's properties
}

// Let variables
function showVariables() {
    var x = 100;  // Available in the entire function
    document.getElementById("nums").innerHTML = "The value of x = " + x;
    {
        let x = 200;  // Only available within the block
        document.getElementById("nums1").innerHTML = "Inside an inner block, x = " + x;
    }
    document.getElementById("nums2").innerHTML = "Outside the code block, x = " + x + " again.";
    
}

// Return
function random() {
    return Math.round(Math.random() * 100);
}

// Objects
let guitar = {  // Create an object with properties and values
    make:"Gibson ",
    model:"Les Paul ",
    color:"Sunburst ",
    description : function() {
        return this.make + this.model + "with a " + this.color + "finish";
    }  // Return results of the function to the value of the property
}

// Break and Continue
function myName() {
    var text = "David C Defourneaux";  // Assign a variable a string
    var newText = "";  // Initialize varible for content
    var i;  // Initialize counter
    for (i = 0; i < text.length; i++) {  // Starting at index 0, loop through the string indices, and increment the counter each iteration
        if (i == 6) {continue;} // Skip index 6
        if (i == 11) {break;}  // Stop executing at index 11
        newText += text[i];  // Add character at the index to the content variable
    }
    document.getElementById("name").innerHTML = newText;  // Display the accumulated content
}