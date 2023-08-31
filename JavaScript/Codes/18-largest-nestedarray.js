function findLargestElement(nestedArray){
    let largest = -Infinity;
    for(let i=0; i<nestedArray.length; i++){
        if(Array.isArray(nestedArray[i])){
            let nestedLargest = findLargestElement(nestedArray[i]);
            largest = Math.max(largest, nestedLargest);
        }
        else {
            console.log(largest);
            largest = Math.max(largest, nestedArray[i]);
        }
    }
    return largest;
}

let arr = [[1, 2, 3],[4, 5, 6],[7, [8, 9, 10], 11]];
console.log(findLargestElement(arr));

// ---------------------------------------------

function findLargestElements(arr){
    let largest = -Infinity;
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            let nestedLargest = findLargestElements(arr[i]);
            if(nestedLargest > largest){
                largest = nestedLargest;
            }
        }
        else {
            if(arr[i] > largest){
                largest = arr[i];
            }
        }
    }
    return largest;
}

console.log(findLargestElements([[1, 2, 3],[4, 5, 6],[7, [8, 9, 10], 11]]));

// ==========================================================================================

function useFlat(arr){
    const flattedArray = arr.flat(Infinity);
    return Math.max(...flattedArray);
}

console.log(useFlat([[1, 2, 3],[4, 5, 6],[7, [8, 9, 10], 11]]));