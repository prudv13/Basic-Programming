const numbers = [1,2,3,4,5];

// array.splice(starting index, number of items to be deleted, item to be added, item to be added,...)

const deleted = numbers.splice(2, 3);
console.log(numbers);
console.log(deleted);

const added = deleted.splice(0, 0, 1, 2);
console.log(deleted);
console.log(added);

