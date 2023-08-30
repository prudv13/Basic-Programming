/*
! CALLBAK HELL

firstFunction(para, function(){
    secondFunction(para, function(){
        thirdFunction(para, function(){

        })
    })
})

* promises -> solves callback hell
* promises 3 states -> pending, fulfilled, rejected

*/

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error){
        resolve("Yes! resolved the promise!");
    }
    else {
        reject("No! rejected the promise.");
    }
});

console.log(myPromise);
myPromise.then(value => value+1)
.then(newValue => console.log(newValue))
.catch(err => console.log(err));

// -------------------------------------------------------------------------------

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("my next promise resolved!");
    }, 3000);
});

myNextPromise.then(value => console.log(value))

myPromise.then(value => console.log(value));
