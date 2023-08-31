const str = `A String primitive`;
// string.indexOf(searchString, position)
// string.lastIndexOf(searchString, position)

console.log(str.indexOf('t'));
console.log(str.indexOf('String'));

console.log(str.lastIndexOf('t'));
console.log(str.lastIndexOf('e'));

console.log(str.indexOf('t', 5));
console.log(str.lastIndexOf('t', 17));

console.log(str.indexOf(' '));
console.log(str.indexOf('ri', -5));

console.log(str.lastIndexOf(' '));
console.log(str.lastIndexOf('ri', -5));

console.log(str.indexOf());
console.log(str.lastIndexOf());