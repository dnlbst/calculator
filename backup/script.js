// Calculator Project

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
    return operator(a, b);
};

console.log(operate(add, 2,4));

// 4.
// functions that populate display when clicking nums,
// storing the ‘display value’ in a variable for use in the next step.

const nums = document.querySelectorAll('num');
num.forEach(e -> {
    return num.
})