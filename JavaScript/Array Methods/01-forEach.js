const numbers = [1,2,3,4,5];

numbers.forEach(consoleItem);

function consoleItem(item, index, arr){
    console.log(item);
    console.log(arr);
    console.log(index);
    console.log(`numbers[${index}] = ${item}`);
}

numbers.forEach((item, index) => console.log(`numbers[${index}] = ${item}`));

// ===================== sum of array items ===========================

function findSum(numbers){
    let sum = 0;
    numbers.forEach((num) => {
        sum +=num;
    })
    return sum;
}

console.log(findSum(numbers));

// ===================== count array item ===========================

const letters = ['a', 'b', 'a', 'b', 'c', 'e', 'c', 'c', 'd'];
function countArrayItems(letters){
    let count = {};
    letters.forEach((letter) => {
        count[letter] = (count[letter] || 0) + 1;
    })
    return count;
}

console.log(countArrayItems(letters));