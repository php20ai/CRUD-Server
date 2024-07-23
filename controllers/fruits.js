const Fruit = require('../models/Fruit')
const fruits = require('../fruit.json')

const index = async (req, res) => {
    try {
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)

    } catch(err) {
        res.status(500).send({error:"Server Error"})
    }
   
}

const show = async (req, res) => {
    
    // Consider dealing with capital letters vs no capital letters in url in HTTP request
  
    // Check if fruits exists in the fruits.json file, if fruits does exist then send the fruit data to client, if fruit does not exist send 404 not found message to client
    // 
  
      
      const name = req.params["name"].toLowerCase()
      console.log(name)
  
     
  
     try {
        const fruit = await Fruit.show(name)
        console.log(fruit)
        res.status(200).send(fruit)
     
     } catch (err) {
        res.status(404).send({error:err})
     }
  
}
// reason why try/catch because cannot send multiple responses at the same time

const create = async (req, res) => {
     const data = req.body;
     const name = data.name
     if (name) {
     console.log(name)
     const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name)
     if (fruit && fruit.name.toLowerCase()!==""){
        res.status(409).send({error:"The fruit deos exist"})
     } else {
        if (!fruit && fruit.name.toLowerCase()!==""){
       
        //1. Call method from mode
        const newFruit = await Fruit.create(data)
        //2. Send response to status code with new element
        res.status(201).send(newFruit) // 201 is for successfull creation of data in database,
        // 200 is for successfully getting data from database.
        }

     }
    } else {
        res.status(409).send("Sorry invalid input ")
     }
    
      



    }



const update = async (req, res) => {
    const data = req.body
    console.log(data)
    const name =req.params.name.toLowerCase()
    console.log(name)

    //get the fruit

    try {
        
        //retreiving specific fruit we want to update
        const fruit =await Fruit.show(name) // fruit is an object of Fruit vraiables which are e.g. genus, family, name, etc

        // fruit.update()
       const updatedFruit =await fruit.update(data)
       res.status(200).send(updatedFruit)


    } catch(err){
        res.status(404).send({error:err})
    }
}

// 

module.exports = {index, show, create, update}

