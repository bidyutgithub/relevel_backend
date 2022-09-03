/////////////////selection sort using///////////////////////
let arr=["India","Australia","China","Russia","Brazil","Japan"];

function selectionSort(arr){
    let n = arr.length;

    //n-1 iteration
    for(i=0;i<n-1;i++){
        // index of min element 
        let minidx=i;
      
        for(j=i+1;j<n;j++){

            if(arr[j].localecompare(arr[minidx])==-1){
                minidx=j;
            }

        }

             //swa[ minidx with current element]
        [arr[minidx],arr[i]]= [arr[i],arr[minidx]];

            //[arr[1],arr[2]] =  [arr[2],arr[1]] 
        
    }
    return arr;
}

console.log(selectionSort(arr));
//Output: [”Australia”,”Brazil”,”China”,“India”,”Japan”,”Russia”]
===========================using insertion sort=================
let arr=["India","Australia","China","Russia","Brazil","Japan"];
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
 }
 return arr;
}
insertionSort(arr)
//Output: [”Australia”,”Brazil”,”China”,“India”,”Japan”,”Russia”]