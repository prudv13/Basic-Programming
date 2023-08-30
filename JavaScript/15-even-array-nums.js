function arrayEvenNumbers(arr){
    let newArr = arr.filter(num => num%2 === 0);
    return newArr;
}

console.log(arrayEvenNumbers([2,3,4,5,6,7,8,9,11,12,13,14,15]));