// const express = require('express')

// const app = express()

// app.get('/', function(req, res){
// 	res.send({name : 'Arpit', age: 24})
// })

// app.get('/user/:userId([0-9]+)/', function(req, res){
// 	console.log(req.params)
// 	const userId = req.params.userId
// 	res.send({name : `kartik_${userId}`, age: 24})
// })

// app.get('/about/:name', function(req, res){
// 	console.log('params',req.params)
// 	console.log('query',req.query)
// 	const userName = req.params.name
// 	res.send({name : userName, age: 24})
// })

// app.get('/address',loggingMiddleware,function(req,res){
// 	console.log('IN controller')
// 	res.send({'adress': 'kanpur'})
// })

// function loggingMiddleware(req, res, next){
// 	console.log('In Middleware')
// 	res.status(400).send('It is an error in middleware')
// }

// app.listen(8000, function(){
// 	console.log("server is running on this URL: http://localhost:8000")
// })
// =======================global middlewere=========================

const express = require('express')

const app = express()

app.use(function(req, res,next){
	console.log('hay i am using global')
	next()
})
app.get('/',function(req,res){
	res.send({name:'bidyut',age:25  })
})

app.get('/user/:userId([0-9]+)/', function(req, res){
	console.log(req.params)
	const userId = req.params.userId
	res.send({name : `kartik_${userId}`, age: 24})
})

app.get('/about/:name', function(req, res){
	console.log('params',req.params)
	console.log('query',req.query)
	const userName = req.params.name
	res.send({name : userName, age: 24})
})

app.get('/address',loggingMiddleware,function(req,res){
	console.log('IN controller')
	res.send({'adress': 'kanpur'})
})

function loggingMiddleware(req, res, next){
	console.log('In local Middleware for address route')
	next()
}

app.listen(8000, function(){
	console.log("server is running on this URL: http://localhost:8000")
})