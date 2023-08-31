// convert to array

const str = '1234567';

const res = Array.from(str, mapFunction);

function mapFunction(x){
    return Number(x);
}

console.log(res);

//==================================================================

const duplicatesArray = [1,2,3,4,3,2,1,4,5,6,7,8,7,6,5,4,3,1];

function removeDuplicates(duplicatesArray){
    return Array.from(new Set(duplicatesArray));
};

console.log(removeDuplicates(duplicatesArray));