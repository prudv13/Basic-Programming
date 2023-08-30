/*
1 kilometer = 0.621371
miles = kilometer*factor
*/

function convertKmsToMiles(kms){
    const factor = 0.621371;
    let miles = kms*factor;
    return miles;
}

console.log(convertKmsToMiles(4));