
// Dave Defourneaux
// dave.defourneaux@gmail.com
// github.com/dd4no

// Determine and display order
function receipt() {
    // Order detail text
    var text = "<h3>Your Order:</h3>";
    // Total bill
    var bill = 0;
    // Base price of pizza size
    var sizePrice = 0;
    // Store an array of all elements with the "size" class
    var sizes = document.getElementsByClassName("size");
    // Loop through the array to determine which size is selected
    for (var i=0; i<sizes.length; i++) {
        if (sizes[i].checked) {
            // Assign value of selected size
            var sizeChoice = sizes[i].value;
            // Add size to order detail text
            text += "-" + sizeChoice + "<br>&nbsp;&nbsp;with:<br>";
        }
    }
    // Base prices for each size
    if (sizeChoice === "Personal Pizza") {
        sizePrice = 6;
    }
    else if (sizeChoice === "Medium Pizza") {
        sizePrice = 10;
    }
    else if (sizeChoice === "Large Pizza") {
        sizePrice = 14;
    }
    else if (sizeChoice === "Extra-large Pizza") {
        sizePrice = 18;
    }
    else if (sizeChoice === "Jumbo Pie") {
        sizePrice = 24;
    }
    // Add price of pizza to bill
    bill = sizePrice;

    // Track variables for testing
    //console.log("size chosen: " + sizeChoice)
    //console.log("price = " + sizePrice);
    //console.log("text: " + text);
    //console.log("bill total = " + bill);

    // Call function to add toppings and give it the current bill and current order detail text
    addToppings(bill, text);
}

// Determine toppings selected, add price to bill, and update order detail text
function addToppings(bill, text) {
    // Store total number of charged selected toppings
    var totalToppings = 0;
    // Store toppings selected in an array
    var toppingChoices = [];
    // Store an array of all elements with "toppings" class
    var toppings = document.getElementsByClassName("toppings");
    // Loop through all toppings to determine which are selected
    for (var j=0; j<toppings.length; j++) {
        if (toppings[j].checked) {
        // Add to array of selected toppings
        toppingChoices.push(toppings[j].value);
        
        // Track variables for testing
        //console.log("toppings: " + toppings[j].value);

        // Update order detail text with selected toppings
        text += "&nbsp;&nbsp;&nbsp;" + toppings[j].value + "<br>";
        }
    }
    // Store total number of toppings selected
    var toppingsCount = toppingChoices.length;
    // First topping is free, so subtract one from the number charged for
    if (toppingsCount > 1) {
        totalToppings = (toppingsCount - 1);
    }
    else {
        totalToppings = 0;
    }
    // Add charged toppings to bill
    bill += totalToppings;

    // Track variables for testing
    //console.log("number of toppings = " + toppingsCount);
    //console.log("total charged toppings = " + totalToppings);
    //console.log("text: " + text);
    //console.log("total bill = " + bill);

    // Display accumulated order detail text
    document.getElementById("showText").innerHTML = text;
    // Display total bill
    document.getElementById("totalPrice").innerHTML = "<h3>Total bill: <strong>$" + bill + ".00</strong></h3>";
}