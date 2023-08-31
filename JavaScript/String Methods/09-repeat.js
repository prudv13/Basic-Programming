const str = 'abc';

console.log(str.repeat(0));
console.log(str);

console.log(str.repeat(1));
console.log(str.repeat(2));

console.log(str.repeat(3.5));
console.log(str.repeat(4.9));

// ramge error
console.log(str.repeat(-1));
console.log(str.repeat(1/0));