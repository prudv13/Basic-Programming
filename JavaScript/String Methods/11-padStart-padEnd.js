const str = "abc";

// string.padStart(targetLength)
// string.padStart(targetLength, padString)

console.log(str.padStart(10));
console.log(str.padStart(10, 'foo'));
console.log(str.padStart(10, '123456789'));


// ===============================================================

console.log(str.padEnd(10));
console.log(str.padEnd(10, 'foo'));
console.log(str.padEnd(10, '123456789'));