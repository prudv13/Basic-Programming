const refStr = "b";
const comStr = "a";

// a ~ b -> -1
// b ~ a -> +1
// a ~ a -> 0
// b ~ b -> 0

console.log(refStr.localeCompare(comStr));

// in german
console.log('ä'.localeCompare('z', 'de'));

// in swedish
console.log('ä'.localeCompare('z', 'sv'));