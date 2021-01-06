// Return the data type (value) and print it to the screen
document.write(typeof false);


// Utilize "Not a number" value to check value state
function notNumber() {
    document.getElementById("test").innerHTML = 0/0;  // Returns NaN
}

function showFalse() {
    document.getElementById("test1").innerHTML = isNaN("Cat"); // Returns True - (Not a number)
}

function showTrue() {
    document.getElementById("test2").innerHTML = isNaN('53');  // Returns False - Not(Not a number)
}

function posInfinity() {
    document.getElementById("test3").innerHTML = 4E500;  // Returns Infinity
}

function negInfinity() {
    document.getElementById("test4").innerHTML = -4E500; // Returns -Infinity
}


// Utilize boolean logic
function boolTrue() {
    document.getElementById("button").innerHTML = (53>52); // Returns True
}

function boolFalse() {
    document.getElementById("button1").innerHTML = (100<53);  // Returns False
}

function boolTrue1() {
    document.getElementById("button2").innerHTML = (53==53); // Returns True
}

function boolFalse1() {
    document.getElementById("button3").innerHTML = (16==53);  // Returns False
}

function boolTrue2() {
    document.getElementById("button4").innerHTML = ("53"==="53"); // Returns True
}

function boolFalse2() {
    document.getElementById("button5").innerHTML = (53==="21");  // Returns False
}

function boolFalse3() {
    document.getElementById("button6").innerHTML = (53==="53");  // Returns False
}

function boolFalse4() {
    document.getElementById("button7").innerHTML = (53===52);  // Returns False
}


// Use console.log() method
console.log(2021-1968);  // Display "53" in the console window
console.log(5>8);  // Display "false" in the console window


// Use Type Coercion
function coerce(){
    document.getElementById("coercion").innerHTML = ("5" + 3)
}

// Use Logical Operators
function logicAND() {
    document.getElementById("button8").innerHTML = (12>6 && 24>12);
}

function logicAND1() {
    document.getElementById("button9").innerHTML = (12<6 && 24>12);
}

function logicOR() {
    document.getElementById("button10").innerHTML = (12>6 || 24<12);
}

function logicOR1() {
    document.getElementById("button11").innerHTML = (12<6 || 24<12);
}
function logicNOT(){
    document.getElementById("button12").innerHTML = (!36>6);
}

function logicNOT1(){
    document.getElementById("button13").innerHTML = (!36<6);
}