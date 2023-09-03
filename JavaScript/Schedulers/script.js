'use strict';

let setIntervalBtn = document.getElementById("setIntervalBtn");
let clearIntervalBtn = document.getElementById("clearIntervalBtn");

let uniqueId = 0;

setIntervalBtn.addEventListener('click', function(){
    let counter = 0;
    uniqueId = setInterval(() => {
        console.log(counter);
        counter += 1;
    }, 2000);
})

clearIntervalBtn.addEventListener('click', function(){
    clearInterval(uniqueId);
    console.log("counter stopped");
})