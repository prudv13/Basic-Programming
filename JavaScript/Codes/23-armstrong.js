function isArmstrong(num){
    let sum = 0;
    let numStr = String(num);
    let strArr = numStr.split('');
    console.log(strArr);
    for(let n of strArr){
        let digit = Number(n);
        sum += digit**3;
        console.log(sum);
    }
    if(sum !== num) return "Not an Armstrong Number";
    else return `${num} is an Armstrong Number`;

}

console.log(isArmstrong(370));