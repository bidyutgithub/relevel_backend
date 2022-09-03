//roman total integer

let romanTotalInt =function(s){
    let romanTotalInt={
      "i": 1,
      "v": 5,
      "x": 10,
      "l": 50,
      "c": 100,
      "d": 500,
      "m": 1000
    };
    let total=0;
    for(let i=0;i<s.length-1;i++){
      let currentInt=romanTotalInt[s.charAt(i)];
      let nextInt=romanTotalInt[s.charAt(i+1)];
     if(nextInt){
       total=currentInt+nextInt;
     }
      else{
        total=total+currentInt;
      }
    }
    return total;
  };
 let s="vx";
 console.log(romanTotalInt(s));
      //output-15