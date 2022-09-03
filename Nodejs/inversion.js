function filter(array,filterFunction){
    let newArray=[]
    for(let i=0;i<array.length;i++){
      const element=array[i]
      if(filterFunction(element)){
        newArray[newArray.length]=element
      }
    }
    return newArray
  }
  
  const array=[0,1,undefined,2,null,3,'four',''];
  console.log(filter(array,el=>el!==null && el!==undefined))
        //[0,1,2,3,four,'']
  console.log(filter(array,el => el!==undefined))
  
  console.log(filter(array,el=> el!==null))
  
  console.log(filter(array,el=>el!==undefined && el!==null && el!==0))
  
  console.log(filter(array,el=>el!==undefined && el!==null && el!==''))
 // ================================= ========================
  
  
  const arr=[1,2,3,4,undefined,null,'','1','2','3']

function filterFuture(arr,costomizeFunction){
	const newArray=[]
	for(let i=0;i<arr.length;i++){
		const value=costomizeFunction(arr[i])
		newArray.push(value)
	}
	return newArray
}

const filterArrayWithoutnull=filterFuture(arr,function(element){
	if(element !==null){
		return element
	}
})

const filterArrayWithoutEmptyString=filterFuture(arr,function(element){
	if(element !==''){
		return element
	}
})
console.log(filterArrayWithoutnull,filterArrayWithoutEmptyString)