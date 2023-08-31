// using temporary value
function swapTwoNumbers1(a,b){
    let temp = a;
    a = b;
    b = temp;
    return `After swapping, a:${a} and b:${b}`;
}

console.log(swapTwoNumbers1(10, 20));

// without using temporary value
function swapTwoNumbers2(x,y){
    x +=y;
    y = x-y;
    x -=y;
    return `After swapping, x:${x} and y:${y}`;
}

console.log(swapTwoNumbers2(13, 22));