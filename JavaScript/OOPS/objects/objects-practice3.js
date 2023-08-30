const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

delete band.drums;
console.log(band.hasOwnProperty("vocals"));

console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
    console.log(band[job]);
    console.log(`On ${job}, it's ${band[job]}!`);
}

//destructuring objects

const {vocals: myVocals, bass: myBass} = band;
console.log(myVocals);
console.log(myBass);

const {guitar} = band;
console.log(guitar);

function sings({vocals}){
    return `${vocals} sings!`;
}

console.log(sings(band));