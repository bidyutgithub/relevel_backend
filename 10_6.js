/*
////////bitwise operator//////////
//bitwise or  operator
console.log(8||2);  //output-8

//bitwise &&  operator
console.log(8|2);  //output-10

==========find unique element==========
  //use XOR
  
 function unique(arr){
   let ans=arr[0];
   for(i=1;i<arr.length;i++){
     ans = ans^arr[i];
   }
   return ans;
 }
let arr= [4,3,2,1,1,3,4]
console.log(unique(arr))  //output-2

//==========naive approch=================
function unique(arr){
  for(i=1;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
      if(arr[i] == arr[j]){
        break;
      }
     if(j==arr.length-1){
       return arr[i]
     }   
    }
  }
}
let arr=[3,2,1,2,3]
console.log(unique(arr))   //output-1

==========find target element=========
// find tagert element 10
 
  function calculate(arr,target){
  let result=[];
  let return_re=[];
  for(i=0;i<arr.length;i++){
    if(result[arr[i]]){
    //insert element in return result array
      return_re.push({[result[arr[i]]]:arr[i]})
    }
  else{
   //assing element at result's index
      result[target-arr[i]]=arr[i];
    }
  }
return return_re;
}
 arr=[2,3,4,5,6,7,8];
console.log(calculate(arr,10));   //output-Array(7) [ 2, 3, 4, 5, 6, 7, 8 ]
                                {4:6},{2:8},{3:7}
 =============subarray===================
    //consecutive subarray

    function subarray(n){
  for(i=0;i<n;i++){
    for(j=i;j<n;j++){

//printing
       for(k=i;k<=j;k++){
        console.log(arr[k])
      }
      console.log("\n")  //new line break
    }
  }
}
let arr=[1,2,3]
subarray(arr.length)  //n=arr.length

  /*output-1 2
           1 2 3
           2 
           2 3
           3 */\

/*
=================mejority element===========

function mejority(arr){
  let n= arr.length;
 
  let maxcount=0;
  let index=0;  // but index always index=-1;
  for(i=0;i<n;i++){
     let count=0;
    for(j=0;j<n;j++){
      if(arr[i]==arr[j]){
        count++;
      }
    }
    if(count>maxcount){
      maxcount=count;
      index=i;
    }
  }
  if(maxcount>n/2){
    console.log(arr[index])
  }
  else{
    console.log("no mejority element")
  }
}
let arr=[3,1,3,3,2]
 mejority(arr)    //output-3;

 ===============intersection in 2d array===========

  function findIntersection(arr1,arr2){
   let i=0;
   let j=0;
    while(i<arr1.length && j<arr2.length){
      if(arr1[i]<arr2[j]){
        i++;
      }
      else if(arr2[j]<arr1[i]){
        j++;
      }
      else{
        console.log(arr2[j])
        i++;
        j++;
      }
    }
 }
let arr1=[1,2,3,3,4,5,6]
let arr2=[3,3,6]
findIntersection(arr1,arr2)  //output-3,3,6
=============findTriplets==========

function findTriplets(arr,target){
  let left,right;
  for(i=0;i<arr.length;i++){
    left=i+1;
    right=arr.length-1;
    while(left<right){
      if(arr[i]+arr[left]+arr[right]==target){
        console.log(arr[i],arr[left],arr[right])
        return true;
      }
      else if(arr[i]+arr[left]+arr[right]<target){
        left++;
      }
    else{
      right--
    }  
    }
  }
  return false;
}
let arr=[1,2,3,5,6,7,8]
 findTriplets(arr,8)  //output 1 2 5
                                true
========================