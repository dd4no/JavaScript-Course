
// concat() method
function comeTogether() {
    var line1 = "Come together...";
    var line2 = "...right now...";
    var line3 = "...over me.";
    var phrase = line1.concat(line2, line3);  // Concatenate
    document.getElementById("lyric").innerHTML = phrase;
}

// slice() method
function getBack() {
    var line = "Get back, get back, get back to where you once belonged";
    var nugget = line.slice(10,18);  // Slice between start and end index(not included)
    document.getElementById("lyric1").innerHTML = nugget;
}

// toUpperCase() method
function capsLock() {
    var line = "I am the walrus";
    var capsON = line.toUpperCase(); // Covert to upper case letters
    document.getElementById("lyric2").innerHTML = capsON;
}

// search() method
function startPosition() {
    var line = "I am the walrus";
    var walrus = line.search("walrus");  // Find starting index for the string
    document.getElementById("position").innerHTML = "walrus starts at index " + walrus;
}

// toString() method
function numbString() {
    var numb = 53;
    var str = numb.toString();  // Convert number to a string
    document.getElementById("num").innerHTML = str + " as a " + typeof(str);
}

// toPrecision() method
function chopPi() {
    var longPi = 3.1415926535897932384626433832795028841971693993751058209749445923;
    document.getElementById("pi").innerHTML = longPi.toPrecision(6); // Make number precise to a specified amount
}

// toFixed() method
function fixNumb() {
    var longPi = 3.1415926535897932384626433832795028841971693993751058209749445923;
    var shortPi = longPi.toFixed(2);  // Fix number of decimals
    document.getElementById("short").innerHTML = shortPi + " -- Much better.";
}

// valueOf() method
function validate() {
    var input = document.getElementById("statement").value;  // Assign variable value of user input
    var string = input.valueOf(); // Get the primitive value of the string object
    document.getElementById("confirmation").innerHTML = "You entered: <br>" + string;
}