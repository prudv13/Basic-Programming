function isSumEqual(arr){
    let target = 13;
    for(i=0; i<arr.length; i++){
        let num = target-arr[i];
        let newArr = arr.slice(arr[i+1], arr[arr.length]);
        if(newArr.includes(num)) return "Exists";
    }
    return "Does not exist";
}

let numbers = [1,2,6,9,3,5,12,4];
console.log(isSumEqual(numbers));