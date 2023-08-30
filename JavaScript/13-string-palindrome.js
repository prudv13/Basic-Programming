function isPalindrome(str){
    let reveredStr = str.toLowerCase().split("").reverse().join("");
    return str.toLowerCase() === reveredStr ? "Palindrome" : "Not a Palindrome";
}

console.log(isPalindrome("Mom"));