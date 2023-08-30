const myObj = {
    name: 'Dave',
    alive: true,
    hobbies: ['Eat', 'Sleep', 'Code'],
    beverage: {
        morning: 'Coffee',
        afternoon: 'Iced Tea',
    },
    action: function(){
        return `Time for ${this.beverage.morning}`;
    }
};

console.log(myObj.alive);
console.log(myObj.name);
console.log(myObj.hobbies[0]);
console.log(myObj.beverage.morning);

console.log(myObj["name"]);
console.log(myObj["alive"]);
console.log(myObj["hobbies"][1]);
console.log(myObj["beverage"]["afternoon"]);

console.log(myObj.action());