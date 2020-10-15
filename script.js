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
function operate(operation, a, b){
    return operation(a,b);
};

// Variables & Starting Pool
const display = document.querySelector('.display');
const nums = document.querySelectorAll('.num');
const opers = document.querySelectorAll('.oper');
const equal = document.querySelector('.equal'); 
const clear = document.querySelector('.ce');

display.innerText = "0";

let displayValue = null;
let operandOne = null;
let operator = null;
let result = null;
let operatorPushed = false;
let equalPushed = false;
let opSlice = '';


// 4. functions that populate display when clicking nums,
// storing the ‘display value’ in a variable for use in the next step.

nums.forEach(e => {
    e.addEventListener('click', () =>{

        // initial Display Values before & after a calcualtion
        if (!operatorPushed){ 
            display.innerText = (display.innerText != "0" && display.innerText != "+" && display.innerText != "×" && display.innerText != "÷" && display.innerText != "-") ? display.innerText + e.innerText : e.innerText;
            operandOne = parseFloat(display.innerText);
            } else {
                if(result != null){
                    display.innerText = e.innerText;
                    operandOne = result;
                    displayValue = parseFloat(display.innerText);
                    result = null
                    } else {
                        display.innerText = (display.innerText != "0" && display.innerText != "+" && display.innerText != "×" && display.innerText != "÷" && display.innerText != "-") ? display.innerText + e.innerText : e.innerText;
                        displayValue = parseFloat(display.innerText);
            } ;
        };

        if(equalPushed) {
            display.innerText = e.innerText;
            operandOne = parseFloat(display.innerText);
            equalPushed = false;
            result = false;
        };            
            
            if(!prod){
                console.log('--------Num pressed---------');
                console.log(`operatorPushed: ${e.id}`);
                console.log("equalPushed: " + (equalPushed));
                console.log(`operandone: ${operandOne}, displayValue: ${displayValue}, result: ${result}`);
                console.log(e.innerText);
            };
    });
});


// 5. storing numbers in variables after pressing operators.

opers.forEach(e => {
    e.addEventListener('click', () =>{
        if(e.id == 'divide'){
            operator = divide;
        } else if(e.id == 'multiply'){
            operator = multiply;
        } else if(e.id == 'add'){
            operator = add;
        } else if (e.id == 'substract'){
            operator = substract;
        };

        if (!operatorPushed) {
                display.innerText = e.innerText;
                operatorPushed = operator;         
        } else {
                displayValue = parseFloat(display.innerText); 
                result = operate(operatorPushed, operandOne, displayValue);
                display.innerText = result;
                operatorPushed = operator;
        };

        if (equalPushed){
            display.innerText = e.innerText;
            operatorPushed = operator;
            operandOne = result;
            equalPushed = false;
            result = null;
        };

        if(!prod){
            console.log('--------Operator pressed--------');
            console.log(`operatorPushed: ${e.id}`);
            console.log("equalPushed: " + (equalPushed));
            console.log(`operandOne: ${operandOne}, displayValue: ${displayValue}, result: ${result}`);
            console.log(`operator: ${operator.name}`);
            console.log(e.innerText);
        };
    });
});



// Equal

equal.addEventListener('click', () =>{
    // displayValue = parseFloat(display.innerText); 
    result = operate(operator, operandOne, parseFloat(display.innerText));
    display.innerText = result;
    operatorPushed = false;
    equalPushed = true;
    operandOne = 0;
    displayValue = 0;

    if(!prod){
        console.log('--------Equal pressed--------');
        console.log(`operatorPushed: ${operatorPushed}`);
        console.log("equalPushed: " + (equalPushed));
        console.log(`operandOne: ${operandOne}, displayValue: ${displayValue}, result: ${result}`);
        console.log("=");
        };
});


// Delete Button "del"

const del = document.querySelector('.delete');

del.addEventListener('click', () =>{
    display.innerText = display.innerText.slice(0, -1);

    if(!prod){
        console.log('--------Delete pressed--------');
        console.log(`operandOne: ${operandOne}, displayValue: ${displayValue}, result: ${result}`);
        };
    
});


// Clear Button "CE"

clear.addEventListener('click', () =>{
    display.innerText = "0";
    operandOne = 0;
    displayValue = 0;
    operatorPushed = false;
    equalPushed = true;

    if(!prod){
        console.log('--------Clear pressed--------');
        console.log(`operandOne: ${operandOne}, displayValue: ${displayValue}, result: ${result}`);
        };
});
