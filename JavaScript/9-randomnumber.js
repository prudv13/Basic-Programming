/*
Math.random()
- returns a random floating point number ranging from 0 to less than 1.

Math.floor(Math.random(highest-number)*(highest-number -1) + lowest-number)
*/

function generateRandomNumber(limit){
    let result = Math.floor(Math.random(limit)*(limit-1) + 1);
    console.log(result);
    return result;
}

console.log(generateRandomNumber(20));