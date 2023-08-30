function toTitleCase(str) { 
    //return str.replace(/\b\w/g, l => l.toUpperCase());
    let str2 = str.split(' ');
    let wordArr = [];
    for(let word of str2){
        let newWord = word.split('');
        newWord[0] = newWord[0].toUpperCase();
        word = newWord.join('');
        wordArr.push(word);
        console.log(wordArr);
    }
    return wordArr.join(' ');
}
console.log(toTitleCase("hello master"));