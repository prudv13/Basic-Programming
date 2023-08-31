const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.includes('fox'));
console.log(sentence.includes('Fox'));

console.log(sentence.includes('fox', 0));
console.log(sentence.includes('fox', 17));