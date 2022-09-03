/*
===============combinational sum=====================
function combinationSum(arr,sum){
    let ans = new Array();
    let temp=new Array();
    arr.sort();
    getNumber(ans,arr,sum,0,temp)
    return ans;
   }

 function getNumber(ans,arr,sum,index,temp){
  //base case
  if(sum==0){
    ans.push([...temp]);
    return;
  }
  for(let i=index;i<arr.length;i++){
    if((sum - arr[i]) >= 0) {
      //pre self work
      temp.push(arr[i]);
      //recursive call
      getNumber(ans,arr,sum-arr[i],i,temp);
       /*  sum-arr[i] that means updated sum  
      [2,3,6,7]
      [2],5       2   7-2=5                                           [2,2],3
      [2,2,2],1  that is proper 
      
    
      [2,2,2,2]-1 that is not proper*/
      
      //post self work
       temp.splice(temp.indexOf(arr[i]), 1);/*splice use that     means delete array [2,3,6,7]
      [2],5       2   7-2=5                                           [2,2],3
      [2,2,2],1   break(backtrack) it this metter and how             inpute 1 because 1 Element hare
       }
      }
  return temp;
 }
 let sum=7;
 let ans = combinationSum([2,3,5,7],sum);
 console.log(ans)  //output-[2,2,3]
                            [2,5]
                            [7]
============================currencey money count============
function getNote(ampunt){
  let availableNote=[2000,500,200,100,50,20,10,5,2,1];
  let counter=Array(10).fill(0);
  for(i=0;i<availableNote.length;i++){
    if(amount>=availableNote[i]){
      counter[i]= Math.floor(amount/availableNote[i])
      amount=amount -counter[i]*availableNote[i];
    }
  }
  for(i=0;i<availableNote.length;i++){
    console.log(availableNote[i],counter[i])
  }
}
let amount=2888;
getNote(amount)  
                    output-2000-1
                            500-1
                            200-1
                            100-1
                            50-1
                            20-1
                            10-1
                            5-1
                            2-1
                            1-1
===================================