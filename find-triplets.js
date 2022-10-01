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