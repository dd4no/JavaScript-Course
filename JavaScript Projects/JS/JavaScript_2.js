// Dave Defourneaux
// dave.defourneaux@gmail.com
// github.com/dd4no

// Form validation
function formValidate() {
    var x = document.forms["contact"]["Email"].value;
    if (x == "") {
        alert("You must provide an email address to submit the form");
        return false;
    }
}