function inputN(n){
    let inputArray = [];
    for(let i = 0; i < n; i++){
        let input = prompt("Enter each value: ");
        inputArray.push(input);
    }
    console.log(inputArray);
    return inputArray;
}

let n = prompt("Enter the number of values: ");
console.log(inputN(n));