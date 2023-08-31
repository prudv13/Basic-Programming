const nestedArr = [1, [2, [3, [4]]]];

const newArr = nestedArr.flat(Infinity);

console.log(newArr);