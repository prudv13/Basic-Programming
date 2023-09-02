const radius = [3,5,6,9,12];

const getArea = function(radius) {
    return Math.round(Math.PI*(radius**2));
}

const getDiameter = function(radius) {
    return radius*radius;
}

const getCircumference = function(radius) {
    return 2*Math.PI*radius;
}

Array.prototype.calculate = function (logic) {
    const output = [];
    for(let i = 0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(getArea));