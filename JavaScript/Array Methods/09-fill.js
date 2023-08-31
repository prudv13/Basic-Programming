const numbers = [1,2,3,4,5];
// fill -> change the array on which it is called upon
// array.fill(value, start index, stop index)

const modified = numbers.fill(13);

console.log(numbers);
console.log(modified);

modified.fill(0,1,4);
console.log(modified);

// ==================================================================

function fillInNumbers(n) {
    return Array(n).fill(0).map((_, index) => index+1);
}

console.log(fillInNumbers(10));