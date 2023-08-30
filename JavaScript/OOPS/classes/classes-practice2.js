class Pizza {
    pizzaCrust = "original"; // public
    #sauce = "traditional"; // private
    #pizzaSize;
    constructor(pizzaType, pizzaSize){
        this.pizzaType = pizzaType;
        this.#pizzaSize = pizzaSize;
        this.pizzaToppings = [];
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

    hereYouGo(){
        return `Here's your ${this.pizzaCrust} ${this.#sauce} sauce ${this.#pizzaSize} pizza.`;
    }
}

const myPizza = new Pizza("pepperoni", "large");

console.log(myPizza.pizzaType);
console.log(myPizza.pizzaCrust);
console.log(myPizza.pizzaSize);

myPizza.setPizzaToppings("sausage");
myPizza.setPizzaToppings("olives");
console.log(myPizza.getPizzaToppings());

console.log(myPizza.bake());

console.log(myPizza.hereYouGo());

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