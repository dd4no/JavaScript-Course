// Dave Defourneaux
// dave.defourneaux@gmail.com
// github.com/dd4no

// Utilize a switch
function changeBackground() {
    var color;
    var choice = document.getElementById("colorChoice").value;
    switch(choice) {
        case "purple":
            color = "purple";
        break;
        case "blue":
            color = "blue";
        break;    
        case "green":
            color = "green";
        break;    
        case "yellow":
            color = "yellow";    
        break;    
        case "orange":
            color = "orange";
        break;    
        case "red":
            color = "red";
        break;    
        default:
            color="white";                          
    }
    document.getElementById("content").style.background = color;
}

// Use getElementsByClassName() method
function boxChoice(n) {
    var boxes = document.getElementsByClassName("box");
    boxes[n].style.background = "rgba(20,20,20,0.5)";
}

function clearBoxes() {
    var boxes = document.getElementsByClassName("box");
    for (i=0;i<boxes.length;i++)
    boxes[i].style.background = "none";
}

// Draw on the canvas
function slashCanvas() {
    var c = document.getElementById("draw");
    var ctx = c.getContext("2d");
    ctx.moveTo(10,0);
    ctx.lineTo(175,200);
    ctx.stroke();
}

function drawCircle () {
    var c = document.getElementById("draw");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(150, 50, 30, 0, 2*Math.PI);
    ctx.stroke();
}

function addText() {
    var c = document.getElementById("draw");
    var ctx = c.getContext("2d");
    ctx.font = "40px 'Comic Sans MS'";
    ctx.fillStyle = "green";
    ctx.fillText("hi", 10, 75);
    
}

function addText1() {
    var c = document.getElementById("draw");
    var ctx = c.getContext("2d");
    ctx.font = "80px 'Comic Sans MS'";
    ctx.strokeText("HEY", 25, 175);
}

function gradient() {
    var c = document.getElementById("draw");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0,100,150,0);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,200,200);
}

function formValidate() {
    var x = document.forms["contact"]["Email"].value;
    if (x == "") {
        alert("You must provide an email address to submit the form");
        return false;
    }
}