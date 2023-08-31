/*
Math.sign(number)
positive -> 1
negative -> -1
zero -> 0
*/

function checkNumber(num){
    if(typeof(num) !== "number") return "Not a Number";
    let result = Math.sign(num);
    let output = result > 0 ? "Positive Number" : result === 0 ? "Number is Zero" : "Negative Number";
    return output;
}

console.log(checkNumber(20));