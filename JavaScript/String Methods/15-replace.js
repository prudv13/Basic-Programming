let text = "Mr Blue has a blue house and a blue car";

let newText = text.replace("Blue", "Blake");

console.log(newText);
console.log(text);

let result1 = text.replace('blue', (match) => {
    return match.toUpperCase();
});

console.log(result1);

let result2 = text.replace(/blue/g, 'red');
console.log(result2);

let result3 = text.replace(/blue/gi, 'red');
console.log(result3);

let result4 = text.replace(/blue/gi, (match) => {
    return match.toUpperCase();
});
console.log(result4);

//========================================================================

let result5 = text.replaceAll("blue", "red");
console.log(result5);

let result6 = text.replaceAll("blue", (match) => match.toUpperCase());
console.log(result6);

let result7 = text.replaceAll(/blue/g, 'red');
console.log(result7);

let result8 = text.replaceAll(/blue/gi, 'red');
console.log(result8);

let result9 = text.replaceAll(/blue/gi, (match) => match.toUpperCase());
console.log(result9);

