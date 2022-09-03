


// //under this coad join (file1.txt  & file2.txt) with expressFileTransfer

// const express = require('express');
// var path= require('path');
// const fs=require('fs');


// const app=express()

// app.use(function(req,res,next){
//     console.log('URL coming from request/clint')
//     console.log(req.url);
//     next();
    
// });

// app.use(function(req,res,next){
//     console.log('Directory Name',__dirname)
//     const filePath = path.join(__dirname,req.url)   //__dirname-directory name
//      console.log('filePath', filePath)
//      res.send('hello sathi love u')
 


//    })
  

//  app.listen(3000, function(){
//     console.log('our server is runnung in this URL http://localhost:3000')
//  })
               /*output-http://localhost:3000/file1.txt  -- search chrome ->enter
                    hello sathi love u */
        
// // ===========================================================================

const express = require('express');
const fs=require('fs')
const path = require('path')

const app=express()

app.use(function(req,res,next){
    console.log('URLcoming form request/clint')
    console.log(req.url)
    next()

})

app.use(function(req,res,next){
    const filePath = path.join(__dirname,req.url)   //__dirname-directory name
    fs.stat(filePath,function(err,fileInfo){
        if(err){
            console.log('err while cheaking about file', err)
            next()
            return
        }
        console.log('fileInfo',fileInfo)

        if(fileInfo.isFile()){
            res.sendFile(filePath)
        }else{
            next()
        }
    })


   })
   app.use(function(req,res,next){ 
    console.log('Invaild URL/ missing file')
    next()
   // res.status(400).send('invalid url from clint side')  //eta na likhla 
                                                          //output nicher output asbe nahole ete likha hole eita output hobe
})

 app.listen(3000, function(){
    console.log('our server is runnung in this URL http://localhost:3000')
 })

 //output- http://localhost:3000/file1.txt  -- search chrome ->enter
           //  name:bidyut, address:west bangal

                           





