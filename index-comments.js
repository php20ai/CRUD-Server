const express = require('express') // Getting express library
const app = express() // Starting the server, this allows us to get HTTP request and send HTTP request.
const port = 3000 // A place or door where the HTTP request will be received and sent by the server (port can be any whole number, but needs to be above 1024).
// Server is application in local computer that gives http response to htpp request.
app.get('/home', (req, res) => {
     // The information of the above the app.get function is shown below:
     // app is the server (which is peices of code that does something) that is created in computer
     // localhost:3000/home
     // localhost is the server that is in my computer so HTTP request will only be sent to server in my computer that is at place 3000, if there are more that one servers made in my computer then
     // they must have different places (ports) to recieve HTTP requests, i.e. in my computer there cannot be two or more servers that are recieving HTTP request from browser at the same place (port)
     // app.get() is a somthing that takes two inputs two things which are 'Path' and another function, that function takes in the HTTP request and HTTP response and as an output gives a HTTP 
     // response to client (computer that sends a HTTP request, HTTP request is sent after we type the url "...... localhost:3000/home" into adress bar then press enter).
  res.send("Name")
}) //Route has server (app) (Method) (PATH, Callback function will take two parameters req and res where request and response) , inside call back some code // then send repsonse
// to do that res.send() shown below:
// get method handles get request
app.get('/dog', (req, res) => {

 res.send("Name is my Name.")
}) 
//:name is a dynamic pramater because it can be anything e.g. cookies.

app.get('/dogs/:name', (req, res) => {
    // within the dog section if we want maybe a type of dog which is name, then name is called the dynamic parameter.
 res.send(req.params) // let parameter be a dynamic parameters then /dog/parameter, to see what text or string that parameter can be we can write "res.send(req.params)"
}) 

//To get

app.get('/dogs/:name', (req, res) => {
    // within the dog section if we want maybe a type of dog which is name, then name is called the dynamic parameter.
 res.send(req.params.name) //This sends the value of synamic parameter which is e.g. cookie
 
// let parameter be a dynamic parameters then /dog/parameter, to see what text or string that parameter can be we can write "res.send(req.params)"
}) 


//To get other data write the following:
app.get('/dogs/:name', (req, res) => {
    // within the dog section if we want maybe a type of dog which is name, then name is called the dynamic parameter.
 res.send(req.query) //This sends the value of synamic parameter which is e.g. cookie
 
// let parameter be a dynamic parameters then /dog/parameter, to see what text or string that parameter can be we can write "res.send(req.params)"
})

app.get('/dogs/:name', (req, res) => {
    // within the dog section if we want maybe a type of dog which is name, then name is called the dynamic parameter.
 res.json(req.query) //res.json() sends information to browser in json layout.
 
  res.end() //res.end() is used when sever does not want to send data to computer (client) but it needs the send a HTTP response to browser to complete HTTP request-response process (otherwise the server
  //keep running)

 
// let parameter be a dynamic parameters then /dog/parameter, to see what text or string that parameter can be we can write "res.send(req.params)"
}) 


//To get other data write the following:
app.get('/dogs/:name', (req, res) => {
    // within the dog section if we want maybe a type of dog which is name, then name is called the dynamic parameter.
 res.status(200).send(req.query) //res.status(200).send(req.query)  is used to put a value of status code in HTTP response
 //res.sendStatus(200) only create HTTP response that contains only (other important information) Status code, but status code is not shown on webpage.
// let parameter be a dynamic parameters then /dog/parameter, to see what text or string that parameter can be we can write "res.send(req.params)"
// the ":name" means that name is a "name" which is a variable and it can be anything such as elephant, gehir, gerjwe, it can be anything, hence the name is called a dynamic variable
// the name can be anything, so in res.send(req.params) the req.params is a dictionary that looks like {key-name: value, key-name2:value2} and th3 key will be the dynamic variable which in this case it is the
// name, and the value of that key is the value that comes after '/dogs/' in the url in the HTTP request i.e for example if I type localhost:3000/dogs/Ocean in the address bar in the browser,
// then I press enter, then browser will create a HTTP request that HTTP request will contain the url which is localhost:3000/dogs/Ocean , that request will be sent to server at port 3000
//, and then the function 
})






//serverName.Method('Path', (res,req) => {
    // logic
    // send back a response 
    // res.send("data")

//})

//The Path is "localhost:3000/"


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  // This requests server to be at the port which has number 3000

