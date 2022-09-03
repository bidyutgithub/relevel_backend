const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.send("hello i am bidyut")
}).listen(4500,function(){
    console.log("hay i am using listen")
})