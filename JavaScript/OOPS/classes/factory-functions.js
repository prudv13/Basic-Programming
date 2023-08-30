function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => `Baking a ${size} ${crust} crust pizza`,
    }
}

const myPizza = pizzaFactory("small");
console.log(myPizza.bake());