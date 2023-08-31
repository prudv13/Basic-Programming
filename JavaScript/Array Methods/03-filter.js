const numbers = [1,2,3,4,5,6];

const evens = numbers.filter(findEven);

function findEven(number, index, arr){
    return number%2 === 0;
}

console.log(evens);

// ===================== filtering people object ===========================

const people = [
    {
        name: 'Florin',
        age: 16,
    },
    {
        name: 'Jonas',
        age: 29,
    },
    {
        name: 'Angela',
        age: 32,
    },
];

function findAdults(people) {
    return people.filter(person => person.age > 18);
};

console.log(findAdults(people));

// ===================== remove duplicates ===========================

const duplicatesArray = [1,2,3,4,3,2,1,4,5,6,7,8,7,6,5,4,3,1];

function removeDuplicates(duplicatesArray){
    return duplicatesArray.filter((item, index, arr) => arr.indexOf(item) === index);
};

console.log(removeDuplicates(duplicatesArray));