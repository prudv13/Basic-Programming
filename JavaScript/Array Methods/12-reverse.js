const numbers = [1,2,3,4,5];

// changes orginal array
// numbers.reverse();
const reversedArray = numbers.concat().reverse();

console.log(numbers);
console.log(reversedArray);

// ======================================================

const sentence = 'Coding is fun!';

const reversedSentence = sentence.split('').reverse().join('');

console.log(reversedSentence);