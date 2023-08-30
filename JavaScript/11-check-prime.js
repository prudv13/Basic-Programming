function checkPrimeNumber(num){
    if(typeof(num) !== "number") return "Not a Number";
    if(num === 0) return "Enter number greater than zero";
    if(num === 1) return "Number is neither prime nor composite";
    if(num < 1) return "Not a Prime Number";

    for(i = 2; i< num; i++){
        if(num%i === 0){
            var res = "Not a Prime Number";
            break;
        }
        else{
            var res = "Prime Number";
        }
    }
    return res;
    
}

console.log(checkPrimeNumber(17));