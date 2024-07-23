const express = require('express')
const app = express()
const fruitRouter = require('./routes/fruitRouter')
 // contains object containing information about fruits

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// converts body of HTTp request to json
app.use('/fruits', express.json())
app.use('/fruits', fruitRouter)

// Can use find method 
//const fruit = fruits.find(fruit => fruit.name.toLowerCase == name)


  
  //let count = 0 
  //for (let i =0; i<fruits.length; i++) {
    //let name1 = fruits[i]["name"]
    //let name1Lower=name1.toLowerCase()
    
    //if (name1Lower=== param) {
        //res.send(name1)
        //count += 1
        //break
    //}
   //}
  //if (count===fruits.length-1) {
        //res.status(404).send("404 not found")
    
// Can use find method 
//const fruit = fruits.find(fruit => fruit.name.toLowerCase == name)
//fruitRouter.post('/', fruits.create)
// Create - POST - create
// Update - PATCH - update
// Delete  - DELETE  - destroy



// 3 routes needed for fruit API
// which is 

module.exports = app