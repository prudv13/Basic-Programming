const participants = ['Florin', 'Liam', 'Jay', 'Jake','Ivan', 'Sunoo', 'Alex', 'Crio'];

participants.sort();
console.log(participants);

// ==================================================================

const numbers = [74, 18, 10, 5, 84, 24, 105];

function sortNumbers(numbers){
    const sortedNumbers = numbers.sort((a,b) => {
        return a-b;
    });
    return sortedNumbers;
}

console.log(sortNumbers(numbers));

// ==================================================================

const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5,
    },
    {
        name: 'Desktop',
        price: 1500,
        count: 2,
    },
    {
        name: 'phone',
        price: 500,
        count: 10,
    },
];

const sortedProductsByPrice = products.sort((a,b) => {
    return a.price - b.price;
})

console.log(sortedProductsByPrice);