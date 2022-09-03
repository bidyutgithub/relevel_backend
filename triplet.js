let arr = [1, -1, 2, 0, 3, -2];

function findTriplets(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    for (j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          console.log(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
}

findTriplets(arr);

//TC :- O(n3)
//SC :- O(1)
//O(n)


/*
[1,-1,2,0,3,-2]
        i
          j
             k
*/
// 1 -1 2
=============anotherway======================
function find3Numbers(A, arr_size, sum)
{
    let l, r;
  // Fix the first element as A[i]
    for (let i = 0; i < arr_size - 2; i++){
    // Fix the second element as A[j]
        for (let j = i + 1; j < arr_size - 1; j++){
        // Now look for the third number
            for (let k = j + 1; k < arr_size; k++) {
                if (A[i] + A[j] + A[k] == sum)
                {
   console.log("Triplet is " + A[i] +  ", " + A[j] + ", " + A[k]);
                   return sum;
                }
            }
        }
    }
   // If we reach here, then no triplet was found
    return false;
}
/* Driver code */
    let A = [1,-1,2,0,3,1,-2 ];
    let sum =0;
    let arr_size = A.length;
    find3Numbers(A, arr_size, sum);
=======================
==========triplet remove duplicate=====================
    //find triplet hash

    function findTriplet(arr){
        let n = arr.length;

        for(let i=0;i<n-1;i++){
          let setArray = new Set();

          for(let j=i+1;j<n;j++){
            let cheakNo= -(arr[i]+arr[j]);

            if(setArray.has(cheakNo)){


              console.log(cheakNo,arr[i],arr[j]);
            }
            else{
              setArray.add(arr[j]);
            }
          }
        }
      }
      findTriplet([1,-1,2,0,3,1,-2]);

 =================upper coad another way==========

      //find triplet hash

      function findTriplet(arr){
        let n = arr.length;

        for(let i=0;i<n-1;i++){
         for(let j=i+1;j<n;j++){
            let cheakNo= -(arr[i]+arr[j]);

            if(arr.includes(cheakNo)){
               console.log(cheakNo,arr[i],arr[j]);
            }

          }
        }
      }
      findTriplet([1,-1,2,0,3,1,-2]);

====================upper coad another way============
      //find triplet hash

      function findTriplet(arr){
        let n = arr.length;

        for(let i=0;i<n-1;i++){
          let setArray = new Set();
         for(let j=i+1;j<n;j++){
            let cheakNo= -(arr[i]+arr[j]);
       
            if(setArray.has(cheakNo)){
               console.log(cheakNo,arr[i],arr[j]);
            }
            else{
              setArray.addEventListener(arr[j]);
            }

          }
        }
      }
      findTriplet([1,-1,2,0,3,1,-2]); 

==========triplete find two pointer============
// tripletewithtwopointer approch
function twoPointer(arr){
  arr.sort((a,b)=>a-b);
  for(let i=0;i<=arr.length-1;i++){
    let left=i+1;
    let right=arr.length-1;
    let arrElement=arr[i];

    while(left<=right){
      if(arrElement+arr[left]+arr[right]==0){
        console.log(arrElement,arr[left],arr[right]);
        left++;
        right++;
      }
      else if(arrElement+arr[left]+arr[right] <0){
        left++;
      }
      else{
        right--;
      }
    }
  }
}
let arr=[1,-1,2,0,3,1,-2];
twoPointer(arr);    
                    //output- -2 -1 3    //time complexity-o(n^2)
                              -2 0 2     //space complexity-o(1 )
                              -2 1 1
                              -2 1 1
                              -1 0 1
==========================================
