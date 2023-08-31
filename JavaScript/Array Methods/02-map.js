const numbers = [1,2,3,4,5];

const numbersDouble = numbers.map(double);

function double(value, index, arr){
    console.log(index);
    console.log(arr);
    return value*2;
}

console.log(numbers);
console.log(numbersDouble);

// ===================== array of products ===========================

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

function getTotalProductsValue(products) {
    const totalProductsValue = products.map((product) => ({
        ...product,
        totalPrice: product.price*product.count,
        })
    );
    return totalProductsValue;
}

console.log(getTotalProductsValue(products));

// ===================== convert string array to number array ===========================
const strArray = ['1', '2', '3', '4', '5', '6'];
function convertToNumberArray(strArray){
    const numbersArray = strArray.map(item => Number(item));
    console.log(typeof numbersArray[0]);
    return numbersArray;
}

console.log(convertToNumberArray(strArray));
