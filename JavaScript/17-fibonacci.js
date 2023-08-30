function findFibonacci(n){
    let arr = [0,1];
    let n1 = arr[0];
    let n2 = arr[1];
    for(let i=n-2; i>0; i--){
        let result = n1 + n2;
        arr.push(result);
        n1 = n2;
        n2 = result;
    }
    console.log(arr);
}

console.log(findFibonacci(5));