const numbers = [1,2,3,4,5,6,7];

//const total = numbers.reduce(callback, initial value);

const total = numbers.reduce(findSum, 0);

function findSum(accumulator, value, index, arr){
    return accumulator+value;
}

console.log(total);

// ===================== max of array items ===========================

function findMax(numArr){
    const maxValue = numArr.reduce((accumulator, value) => {
        return accumulator > value ? accumulator : value > accumulator ? value : null;
    });
    return maxValue;
}

console.log(findMax(numbers));

// ===================== store array ===========================

const store = [
    {
        product: 'laptop',
        price: 1000,
        count: 3,
    },
    {
        product: 'Desktop',
        price: 1500,
        count: 4,
    },
    {
        product: 'phone',
        price: 500,
        count: 10,
    },
];

function findTotalProductsPrice(store){
    const totalProductsValue = store.reduce((accumulator, item) => {
         return accumulator + (item.price*item.count);
    }, 0);
    return totalProductsValue;
}

console.log(findTotalProductsPrice(store));