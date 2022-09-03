const myPromise=function(){
    return new Promise(function(resolve,reject){
        
     // reject('is rejected')    ////output- data is resolve  
      resolve('its resolve')
    });
  }
  
   myPromise().then(function(data){
     console.log("data", data)
   }).catch(function(data){
     console.log(error)
   });
                  //output- data is resolve 
======================smae coad arrow mathod=========================

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

 cakePromise('vanila').then(data =>console.log(data))
 .catch(error =>console.log(error))    //output-'dam! out of here sathi'
 ================================================================
 =========================promise===============
 const successPromise =() =>{
	return new Promise((resolve,reject) =>{
	  resolve('hey i am success one')
	})
  }
  
  const failurePromise =() =>{
	return new Promise((resolve,reject) =>{
	  reject('hey i am reject one')
	})
  }
  
  const mixPromise=(flag)=>{
	return new Promise((resolve,reject)=>{
	  if(flag){
		resolve('hey flag is true')
	  }
	  else{
		reject('hey flag is false')
	  }
	})
  }
  
  successPromise().then(data =>console.log('data',data))
  failurePromise().catch(err => console.log('err', err))
  
  mixPromise(true).then(data =>console.log('mixedData', data))
  .catch(err =>console.log('mixedData', err))
               /* output-data hey i am success one
                          err hey i am reject one
						  mixedData hey flag is true */
