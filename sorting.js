
===================sorting===================

========================bubble sort=====================

function bubbleSort(arr){
    let n = arr.length; // length of array
    for(let i=0;i<n-1;i++){  //n-1 iteration
        
        var isswapped = false;

        //comparing the adjsm ent elements 
        for(let j = 0;j < n-1-i;j++){ 
            
            //if current elem is smaller and elem bigger we do need to swap 
            if(arr[j] > arr[j+1]){
                //swap element at jth and j+1 index 
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isswapped=true;
            }
        }
         if(!isswapped){
            break;
        }
        console.log(arr)
    }
    return arr;
}
bubbleSort([5,1,4,2,8])

=================selection sort====================
function selectionSort(arr){
    let n = arr.length;

    //n-1 iteration
    for(i=0;i<n-1;i++){
        // index of min element 
        let minidx=i;
        console.log("arr[i]",arr[i])
        console.log("arr[minidx]",arr[minidx])
        for(j=i+1;j<n;j++){

            if(arr[j]<arr[minidx]){
                minidx=j;
            }
        }
          //swap[ minidx with current element]
        [arr[minidx],arr[i]]= [arr[i],arr[minidx]];

            //[arr[1],arr[2]] =  [arr[2],arr[1]] 
        console.log(arr)
    }
    return arr;
}
selectionSort([4,5,3,2,9])

====================insertion sort====================

function insertionSort(arr){
  let n=arr.length;       //length of array
  for(let  i=0;i<n;i++){
    //the element which is picked from the unsorted region and need to be placed
     //at its right position in sorted region

    let element=arr[i]  //if your current element is at i th index the sorted region sort i-1 index 
    let j=i-1;
    while(j>=0 && element<arr[j]){
     //shifting process
      arr[j+1]=arr[j];
    j--;//cheak for another element  if present 
  }
    arr[j+1]=element;
 }
  return arr;
}
console.log(insertionSort([5,4,2,1,6]))
          //output-[ 1, 2, 4, 5, 6 ]

=============how it work this upper coad ===================
function insertionSort(arr){
  let n=arr.length;
  for(let  i=0;i<n;i++){
    let element=arr[i]
    let j=i-1;
    while(j>=0 && element<arr[j]){
      arr[j+1]=arr[j];
    j--;
  }
    arr[j+1]=element;
    console.log(arr);
 }
  return arr;
}
insertionSort([5,4,2,1,6])
    //output-[ 5, 4, 2, 1, 6 ]
             [ 4, 5, 2, 1, 6 ]
             [ 2, 4, 5, 1, 6 ]
             [ 1, 2, 4, 5, 6 ]
             [ 1, 2, 4, 5, 6 ]
             [ 1, 2, 4, 5, 6 ]

==================