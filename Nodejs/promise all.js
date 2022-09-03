const cakePromise=function(cakeType){
    return new Promise(function(resolve,reject){
        if(cakeType==='strawabrry'){
          resolve('thank sathi you bring cake')
        }
      else{
        reject('dam! out of here sathi')
      }
    
    });
  }

  function bringCake(){}
  function bringFries(){}
  function serverDrink(){}

  function preparePromise(){
    return new Promise((resolve,reject) =>{
        bringCake()
        bringFries()
        serverDrink()
    })
  }
  Promise.all([bringCake,bringFries,serveDrink].then((cake,frise,drink)))
  
   cakePromise('vanila').then(data =>console.log(data))
   .catch(error =>console.log(error)
===============================other coad==========================

   const cakePromise = function(cakeType){
    return new Promise(function(resolve,reject){
       if(cakeType === 'strawberry'){
           resolve('thanks Rohan for bringing cake')
       }
       else{
           reject('Damn! Rohan, I have to go and bring now')
       }
       })
}

function bringCake(){}
function bringFries(){}
function serveDrink(){}

function preparePromise(){
    return new Promise((resolve, reject) => {
        bringCake()
        bringFries()
        serveDrink()
    })
}

Promise.all([bringCake,bringFries,serveDrink])
.then((values) =>{console.log(values);
})


cakePromise('vanilla').then(data => console.log(data))
.catch(err => console.log(err))