const httpServer=require('http');


function listener(request,response){
    if(request.url==='/user'){
        response.end('hey i  am using api')
    }
    else if(request.url==='/address'){
        response.end('hey i  am using address')
    }
    else{
        response.end('hey this api dose not exist')
    }
}

const server=httpServer.createServer(listener)

server.listen(8000,function(){
    console.log('hey i am using this URL : http://localhost:8000')
})