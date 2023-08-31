const str = 'The morning is upon us.';

console.log(str.slice(12));
console.log(str);

console.log(str.slice(-2));

console.log(str.slice(13,16));

console.log(str.slice(16,13));

console.log(str.slice(-8, -4));
console.log(str.slice(-8, 4));

console.log(str.slice(8, -4));



// ========================================================================

console.log(str.substring(12));
console.log(str);

// starts at 0
console.log(str.substring(-11));

console.log(str.substring(13,16));
console.log(str.substring(16,13));

console.log(str.substring(-8, -4));
console.log(str.substring(-8, 4));

console.log(str.substring(8, -4));