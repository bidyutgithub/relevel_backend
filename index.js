// ========================categories===================
// //categories database create

// const {serverPort} = require('./config/config.server')
// const express = require('express')
// const { Categories, sequelize } = require ('./models')  
// //const categories = require('./models/categories')
// //  require('dotenv').config()           //file transfer korar jonno env help kore eivabe
// //  process.env.PORT                    //ekhane port er jaigay .env file ja ache ter modha thake ja type korbo sata asbe
// const routes = require('./routes')
// const app = express()


// app.use(express.json())
// app.use(routes)
// app.listen(serverPort,async ()=> {
// 	console.log('server is running on this port', serverPort)
//     await init()
// }) 
// async function init(){
// 	try{
// 		await Categories.sync({force:true})
// 		const defaultCategories = [
// 		{
// 			name:"mobile",
// 			description: "About Mobile"
// 		},
// 		{
// 			name:"Washing Mechine",
// 			description: "About Washing Mechine"
// 		},
// 		{
// 			name:"Television",
// 			description: "All television Deatils"
// 		},
// 		{
// 			name:"Clothes",
// 			description: "All Clothes Deatils"
// 		}
// 	]

// 	const result = await Categories.bulkCreate(defaultCategories)
//       console.log(result)
// 	}
// 	catch(err){
//     console.log(err)
// 	}

//    }

//    //console.log('serverPort',serverPort)  






// ==========================product=================
//product database create


const {serverPort} = require('./config/config.server')
const express = require('express')
const { Categories, sequelize, Products, Role } = require('./models')
const {categoryRoutes, productRoutes, authRoutes, cartRoutes} = require('./routes')
const app = express()
//const jwt = require('jsonwebtoken')


app.use(express.json())
app.use(authRoutes)
app.use(categoryRoutes)
app.use(productRoutes)
app.use(cartRoutes)

app.listen(serverPort, async ()=>{
	console.log('server is running on this port', serverPort)
	await init()

	// const payload = {id : 'hello I am ID', exp: Math.floor(Date.now() / 1000) + (60*60)};
	// const secretKey = 'nlidsjfowefldsmfpojwefjmfnfnwahefnvleofmsn';
	
	// const token = await jwt.sign(payload,secretKey,/*{expiresIn: '5s}  ata o use kora jabe uporer exp ta kate ata use kora jabe*/);
	// console.log('token', token)

	// const data = jwt.verify(token,'ggggg')
	// console.log('data',data)
})

async function init(){
	try{
		await sequelize.sync({force:true})
		//await sequelize.authenticate()           // ata use kora hoy kono sign in or sign up korar pore password jeno delete na ho ter jonno 

		const defaultProducts = [
     {
         "description":"Nyka best products",
         "name" :"MakeUp Kit",
         "cost": 170,
         "quantity": 20,
		 "CategoryId": 1
      },
      {
         "description":"Best fragnence",
         "name" :"Foog",
         "cost": 200,
         "quantity": 20,
		 "CategoryId": 2
     },
	 {
		"description":"Best for summer clothes",
		"name" :"Summer Clothes",
		"cost": 400,
		"quantity": 20,
		"CategoryId": 3
	 }
		]

		const defaultCategories = [
		{
			name : 'Beauty',
			description: 'All beauty Product'
		},
		{
			name: 'Fragnence',
			description: 'All Perfume Product'
		},
		{
			name: 'Clothes',
			description: 'All type of clothes'
		}
		]

		const defaultRoles = [
			{
				name : 'User'				
			},
			{
				name: 'Admin'				
			},
			
			]
		await Categories.bulkCreate(defaultCategories)
		await Products.bulkCreate(defaultProducts)
	    await Role.bulkCreate(defaultRoles)
	}
	catch(err){
		console.log(err)
	}

}