function findFactorial1(n){
    let fact = 1;
    if(n === 0 || n === 1) return fact;
    else if(n>1){
        for(let i = n; i>=1; i--){
            fact = fact*i;
            console.log(fact);
        }
        return fact;
    }
    else {
        return "Must be Positive number!";
    }
};

console.log(findFactorial1(10));

function findFactorial2(n){
    if(n < 0){
        return "Must be Positive number!";
    }
    if(n === 0 || n === 1){
        return 1;
    }
    else {
        let fact = n*findFactorial1(n-1);
        console.log(fact);
        return fact;
    }
}

console.log(findFactorial2(10));
