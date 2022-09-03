//let serverPort = 4500;

//if(process.env.NODE_ENV !== 'production'){
   
 //if(process.env.NODE_ENV === 'devlopment'){
    if(process.env.NODE_ENV === 'production'){      ///eta use kora holo karon upore ja server port ache seta ke output korara jonno and .env file ja devlopment ache sater jonno
    require('dotenv').config()
   // serverPort =  process.env.PORT
}

module.exports ={
    //serverPort: serverPort
    serverPort: process.env.PORT
}

