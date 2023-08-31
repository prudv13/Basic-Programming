function checkEvenOrOdd(num){
    if(typeof(num) !== "number") return "Not a Number";
    if(num === 0) return "Enter number greater than zero";
    let result = num%2 === 0 ? "Number is Even" : "Number is Odd";
    return result;
}

console.log(checkEvenOrOdd(20));