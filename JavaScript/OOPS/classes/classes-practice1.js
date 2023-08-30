class Pizza {
    constructor(pizzaType, pizzaSize, pizzaCrust){
        this.pizzaType = pizzaType;
        this.pizzaSize = pizzaSize;
        this._pizzaCrust = pizzaCrust;
        this.pizzaToppings = [];
    }

    getPizzaCrust(){
        return this._pizzaCrust;
    }

    setPizzaCrust(pizzaCrust){
        this._pizzaCrust = pizzaCrust;
    }

    getPizzaToppings(){
        return this.pizzaToppings;
    }

    setPizzaToppings(pizzaToppings){
        this.pizzaToppings.push(pizzaToppings);
    }

    bake(){
        return `Baking a ${this.pizzaSize} ${this.pizzaCrust} ${this.pizzaType} crust pizza with ${this.pizzaToppings[0]} and ${this.pizzaToppings[1]} topping`;
    }
}

const myPizza = new Pizza("pepperoni", "small", "original");

console.log(myPizza.pizzaType);
console.log(myPizza.pizzaCrust);
console.log(myPizza.pizzaSize);

myPizza.setPizzaCrust("thin");
console.log(myPizza.getPizzaCrust());

myPizza.setPizzaToppings("sausage");
myPizza.setPizzaToppings("olives");
console.log(myPizza.getPizzaToppings());

console.log(myPizza.bake());

// -----------------------------------------------------------------------------------------------------

class SpecialtyPizza extends Pizza{
    constructor(pizzaSize){
        super(pizzaSize);
        this.pizzaType = "The Works";
    }
    slice() {
        return `Our ${this.pizzaType} ${this.pizzaSize} pizza has 8 slices.`;
    }
}

const mySpecialty = new SpecialtyPizza("medium");
console.log(mySpecialty.slice());