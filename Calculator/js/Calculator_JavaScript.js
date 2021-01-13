// Dave Defourneaux
// dave.defourneaux@gmail.com
// gethub.com/dd4no


// Define calculator object for tracking values
const calculator = {
    displayValue: "0",
    firstOperand: null,
    // Conditional state for second operand
    waitState: false,
    operator: null
};


// Modify values when button is clicked
function input(digit) {
    // Store display value and wait state
    const  { displayValue, waitState } = calculator;
    // If wait state is true, set state to false and reset display for a new operand 
    if (waitState === true) {
        calculator.displayValue = digit;
        calculator.waitState = false;
    }
    // Otherwise display the digit, or append it to the display
    else {
        calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
}

// Decimal point operations
function decimal(dot) {
    // Prevent accidental clicks
    if (calculator.waitState === true) return;
    // Add a decimal point if NOT already present
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

// Operator function
function Operator(nextOp) {
    // Get properties from calculator
    const { firstOperand, displayValue, operator } = calculator;
    // Store numeric value for display value string
    const inputValue = parseFloat(displayValue);
    // If operator is already present and wait state is true update operator
    if (operator && calculator.waitState) {
        calculator.operator = nextOp;
        return;
    }
    // If first operand is null assign input value
    if (firstOperand == null) {
        calculator.firstOperand = inputValue;
    }
    // Otherwise calculate result of last operator
    else if (operator) {
        // Store first operand if a value has been input
        const currentValue = firstOperand || 0;
        // Calculate results with Calculation object
        let result = Calculation[operator] (currentValue, inputValue);
        // Remove extra zeros
        result = Number(result).toFixed(9);
        // Convert result to string for output display
        result = (result *1).toString();
        // Update calculator object with numeric values for additional operations
        calculator.displayValue = parseFloat(result);
        calculator.firstOperand = parseFloat(result);
    }
    // Change the wait state to true and update the operator
    calculator.waitState = true;
    calculator.operator = nextOp;
}

// Calculate results
const Calculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand,
};

// Reset calculator
function reset() {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitState = false;
    calculator.operator = null;
}

// Update the output screen
function updateDisplay () {
    // Store output element
    const display = document.querySelector(".output");
    
    // Change value of output to value stored in calculator
    display.value = calculator.displayValue;
}

updateDisplay();


// Monitor Button Clicks

// Store all the elements in the keypad class
const keys = document.querySelector(".keypad");

// Monitor for clicks on any element in the keypad
keys.addEventListener("click", (event) => {
    // Store value of event attribute "target"
    const { target } = event;
    // If target is NOT a button return
    if (!target.matches("button")) {
        return;
    }
    // If target is an operator, decimal, or all-clear button run functions
    if (target.classList.contains("operator")) {
        // Run Operator function with button value
        Operator(target.value);
        // Update the output
        updateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        // Run the decimal function with button value
        decimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("all-clear")) {
        // Run reset function, update display and return
        reset();
        updateDisplay();
        return;
    }
    // All other buttons are numbers.  Run input function with button value
    input(target.value);
    updateDisplay();
})