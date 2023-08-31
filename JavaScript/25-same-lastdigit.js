function isSameLastDigit(inputArray) {
    let lastDigit = String(inputArray[0]).split('').pop();
    for(let item of inputArray){
        let str = String(item).split('');
        if(lastDigit !== str[str.length-1]){
            return "All last digits are not equal";
        }
    }
    return "All last digits are same";
}

console.log(isSameLastDigit([321, 1321, 1561, 871, 981, 391, 451]));