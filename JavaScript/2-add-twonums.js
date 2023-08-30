// add static numbers
let a = 5;
let b = 6;
function addStaticNumbers(a,b){
    let result = `The sum of ${a}, ${b}: ${a+b}`;
    return result;
}

console.log(addStaticNumbers(a,b));

// add dynamic numbers
let x = parseInt(prompt("Please enter first number: "));
let y = parseInt(prompt("Please enter second number: "));
function addDynamicNumbers(x,y){
    let result = `The sum of ${x}, ${y}: ${x+y}`;
    return result;
}

console.log(addDynamicNumbers(x,y));