// Assigns the variable, Text, a string
// Uses the fontcolor method to change the text color and assigns it to the variable, newText
// Uses the getElementById method to substitute the content of the element with the ID of "sentence" with the value of newText
// Repeats with different colors for fun and experiment

function Red_Font () {
    var Text = "It is a RED letter day!";
    var newText = Text.fontcolor("red");
    document.getElementById("sentence").innerHTML = newText;
}

function Blue_Font () {
    var Text = "Feeling BLUE now.";
    var newText = Text.fontcolor("blue");
    document.getElementById("sentence").innerHTML = newText;
}

function Green_Font () {
    var Text = "Got any GREEN?";
    var newText = Text.fontcolor("green");
    document.getElementById("sentence").innerHTML = newText;
}

function Black_Font () {
    var Text = "Back in BLACK!";
    var newText = Text.fontcolor("black");
    document.getElementById("sentence").innerHTML = newText;
}

function Reset () {
    var Text = "Choose a COLOR:";
    document.getElementById("sentence").innerHTML = Text;
}
// End of Font Color Function

// Concatenate multiple strings into one variable and modify the contents of the element with the ID of "joinMe"
function joinMe (){
    var quote = "\"It\'s easy to grin, ";
    quote += "when your ship comes in and you've got the stock market beat";
    quote += ", but the man worthwhile, is the man who can smile ";
    quote += "when his shorts are too tight in the seat.\"";
    document.getElementById("joinMe").innerHTML = quote;
}