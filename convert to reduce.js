function convertToReduce(arr){
    //copy original array to temp
    let temp= [...arr];
    //sort array
    temp.sort((a,b)=>a-b);
    //creat empty map
    let convertMap = new Map();
    let counter = 0;
    //travarse through map and store the maping number
    for(let i=0;i<arr.length;i++){
      convertMap.set(temp[i], counter++);
    }
    //travarse through my map and store value to corresponds   to oroginal array element
    for(let i=0;i<arr.length;i++){
      arr[i] = convertMap.get(arr[i]);
    }
  }
  let arr = [1,2,5,10,3,4]
  convertToReduce(arr);
  console.log(arr)   //output 0,1,4,5,2,3