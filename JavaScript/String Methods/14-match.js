const text = "The rain in SPAIN stays mainly in the plain";

let res = text.match('ain');
console.log(res);

console.log(res[0]);
console.log(res.index);
console.log(res.input);

let resRegxp = text.match(/ain/);
console.log(resRegxp);

console.log(text.match(/ain/gi));

// ========================================================================

// convert 'ain' to global regexp '/ain/g'
let result = text.matchAll('ain');
console.log(...result);

console.log(...text.matchAll(/w/gi));