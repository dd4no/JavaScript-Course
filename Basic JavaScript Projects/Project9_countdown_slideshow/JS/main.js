
// COUNTDOWN TIMER
function countdown() {
    var seconds = document.getElementById("seconds").value;  // Assign variable value of user input
    function tick() {  // Define function
        seconds = seconds - 1; // Decrement seconds by 1
        timer.innerHTML = seconds; // Display seconds remaining
        setTimeout(tick,1000);  // Pause for 1000ms (1s)
        if (seconds == -1) {  // When timer goes below zero display alert box
            alert("Time is up");
        }
    }
    tick(); // Call function (endlessly)
}


// SLIDESHOW
// Global Settings
var slideIndex = 1;  // Sets global variable for slide index
showSlides(slideIndex); // Calls function to display initial slide

//  Forward and Back Buttons
function changeSlide(n) {
    showSlides(slideIndex += n);  // Changes slide index based on user input
}

// Thumbnail image controls
function currentSlide(n) { 
    showSlides(slideIndex = n);  // Changes slide index based on user input
}

function showSlides(n) { // Determines visable slide
    var i;  // Declares counter variable for loops
    var slides = document.getElementsByClassName("slides"); // Assigns the variable an array of class instances
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}  // If Index goes beyond length of array, reset it to one
    if (n < 1) {slideIndex = slides.length}  // If Index goes to zero, reset to last index in array
    for (i = 0; i < slides.length; i++) {  // Loops through slides and hides each one
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {  // Loops through thumnails and removes "active" class
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  // Displays current indexed slide
    dots[slideIndex-1].className += " active";  // Sets class of current indexed thumbnail to "active"
}