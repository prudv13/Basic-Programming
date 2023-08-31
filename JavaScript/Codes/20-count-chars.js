function countChars(str){
    let charObj = {};
    for(char of str){
        charObj[char] = (charObj[char] || 0) + 1;
    }
    return charObj;
}

console.log(countChars("hellohello"));