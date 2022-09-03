// const httpServer=require('http');

// function listener(request, response){
//     response.writeHead(200,{
//         'content-type':'text/plain',
//         'hello':'bidyut'
//     })
//     const body='hey sathi i am coming in your home'
//     response.end(body)
//  }

// const server=httpServer.createServer(listener)

// server.listen(8000,function(){
//     console.log('hay i am going to station and coming in my home :http//localhost:8000')
// })        //output--http//localhost:8000   this link search in google chrome and inspact now go to network

// =========================================================
// const httpServer=require('http');

// function listener(request, response){
//     response.writeHead(200,{
//         'content-type':'application/json',
//         'hello':'bidyut'
//     })
//     const body={'name':'bidyut','age':25}
//     response.end(body)
// }

// const server=httpServer.createServer(listener)

// server.listen(8000,function(){
//     console.log('hay i am going to station and coming in my home :http//localhost:7000')
// })
// ======================================================================

const httpServer = require('http');

function listener(request, response){
	response.setHeader('Content-Type', 'text/csv')
	response.setHeader("Content-Disposition", "attachment;filename=details.csv");
	
	//response.setHeader('Content-Type', 'application/json')
	//response.setHeader('Content-Type', 'text/plain')
	response.writeHead(200, {
		// 'Content-Type' : 'text/html',
		'Hello' : 'bidyut'
	})

	const body = `name,rollNumber,school\nTushar raina,34,Thapar\nArpit Purwar,43,kP`
	response.end(body)
}

  const server = httpServer.createServer(listener)

  server.listen(8000, function(){
	console.log('Hey I am running on this URl : http://localhost:8000')
  })