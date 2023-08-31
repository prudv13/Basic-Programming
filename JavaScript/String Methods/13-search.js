const text = "The rain in SPAIN stays mainly in the plain";

let position = text.search('ain');
console.log(position);

// using regexp
let positionwithRegxp = text.search(/ain/);
console.log(positionwithRegxp);

// using regexp, case not sensitive
let positionwithRegx = text.search(/AIN/i);
console.log(positionwithRegx);