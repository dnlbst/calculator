// Calculator Project

// set production (development) mode
const prod = false;

// simple math functions:
//add
const add = function add(a, b){
    return a + b;
};

//substract
const substract = function substract(a, b){
    return a - b;
};

//multiply
const multiply = function multiply(a, b) {
    return a * b;
};

//divide
const divide = function divide(a, b) {
    return a / b;
};    


// operate function
function operate(operator, a, b){
    if(!prod)
        console.log("OPERATOR: " + a + " " + operator.name + " " + b + " = " + operator(a, b));
    return operator(a, b);
};

 

// 4.
// functions that populate display when clicking nums,
// storing the ‘display value’ in a variable for use in the next step.
const display = document.querySelector('.display');
const nums = document.querySelectorAll('.num');
let displayValue = null;
let operandOne = null;
let operatorPushed = false;

display.innerText = "0";
nums.forEach(e => {
    e.addEventListener('click', () =>{
        //if (!operatorPushed)
        display.innerText = (display.innerText != "0" && display.innerText != "+" && display.innerText != "×" && display.innerText != "÷" && display.innerText != "-") ? display.innerText + e.innerText : e.innerText;
        displayValue = parseFloat(display.innerText);
    });
});


// 5. storing numbers in variables after pressing operators.

const opers = document.querySelectorAll('.oper');

opers.forEach(e => {
    e.addEventListener('click', () =>{
        // show operator on display
        display.innerText = e.innerText;

        if(!prod)
                console.log("OPERATOR: " + e.id);

        // check if operator not already was pushed
        if (!operatorPushed) {
            if(!prod)
                console.log("operatorPushed: false");
            operandOne = displayValue;
        }
        // else perform operation
        else {
            // operandTwo = displayValue
            // OPERATE FUNCTION GOES HERE
            if(e.id == 'divide'){
                operator = divide;
            } else if(e.id == 'multiply'){
                operator = multiply
            } else if(e.id == 'add'){
                operator = add
            } else if (e.id == 'substract'){
                operator = substract
            };
            operandOne = operate(operator, operandOne, displayValue);

        };

        operatorPushed = !operatorPushed;
    });
});

