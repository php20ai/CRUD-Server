const {show} = require("../controllers/fruits")
const fruits = require("../fruit.json")
// Fruit.js will contain a class called Fruit, classes start with capital letter, and name of file will becalled the class Fruit.



     //   const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name)
    
      //  if (fruit === undefined){
       //     res.status(404).send("404 not found")
            
      //  } else {
          //  res.status(200).send(fruit)
     //   }
  
class Fruit {
    constructor (fruit){ //fruit is an object of Fruit
        this.genus= fruit.genus
        this.name= fruit.name
        this.id= fruit.id
        this.family= fruit.family
        this.order= fruit.order
        this.nutritions= fruit.nutritions
    }
    
    static showAll() {        
        return fruits.map(fruit => new Fruit(fruit)) // shows all objects of fruits
  
  
      }
     
    show(name) {  
       const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name)
       if (fruit) {
          return new Fruit(fruit) // 
        } else {
            throw "The fruit doesn't exist."
        }
        
  
    }
    static create(data) {
        const newFruit = data
        console.log(data)
        fruits.push(newFruit)
        return new Fruit(newFruit) // to create a new object of fruit

    }

    update(data) {
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name) // check if fruit name exits in fruits 
        if (updatedFruit){
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else {
            throw "Fruit not found."
        }
        
    } //not a static method

    
}

module.exports = Fruit