const express = require('express')
const fruitRouter = express.Router()// fruit 
const fruits = require('../controllers/fruits.js')

fruitRouter.get('/', fruits.index)

fruitRouter.get('/:name', fruits.show )

fruitRouter.post('/', fruits.create)

fruitRouter.patch('/:name', fruits.update)

module.exports = fruitRouter


