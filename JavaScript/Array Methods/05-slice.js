const numbers = [1,2,3,4,5];

const slicedNumbers = numbers.slice(1, 4);

console.log(numbers);
console.log(slicedNumbers);
console.log(numbers.slice(-1));

// ==================================================================

const participants = ['Florin', 'Ivan', 'Liam', 'Jay', 'Jake', 'Sunoo'];

function winners(participants) {
    return participants.slice(0,3);
}

console.log(winners(participants));