const express=require('express')
const bodyParser=require('body-Parser')
const app=express();

//configuring body parser middleware
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

let userDataArray=[{name:'bidyut',age:25, place:'west bangal', platform:'relevel'},
                {name:'sathi',age:20, place:'west bangal', platform:'high school'}
               ]


app.get('/getuser',function(req,res){
    res.send(userDataArray)
})

app.post('/createUser',validateUserData,function(req,res){
    const userData=req.body;
    console.log('userDataBody', userData)
    userDataArray.push(userData)

    console.log('userDataArray', userDataArray)

    res.send({msg:'Data is added successfully'})
})

function validateUserData(req,res,next){
     const userData=req.body;
     if(userData.name && userData.id && userData.place){
        next()
     }
     else{
      res.status(400).send({'err': "userData is missing"})
     }
}

app.put('/updataUser',function(req,res){
    const userData=req.body
    if(userData.age){
     const index= userDataArray.findIndex(items=>items.age ===userData.age)
    
     if(userData.name){
          userDataArray[index]['name'] =userData.name

     }else if(userData.place){
        userDataArray[index]['place'] =userData.place

     }


    res.send({msg:'Update in successfully'})
    }else{
        res.status(400).send({'err' : 'User age is missing'})
    }
})

app.delete('/deleteUser',function(req,res){
    const userData=req.body;
    userDataArray=userDataArray.filter(item =>item.age !== userData.age)

   res.send({'msg':'delete Data is successfully'})
})

app.listen(4000,function(){
    console.log('hay i am running on server URL:http://localhost:4000')
})