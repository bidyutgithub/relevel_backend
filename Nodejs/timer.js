for(let i=0;i<10;i++){
    const timeout=setTimeout(function(pilu love){
        console.log(i)
    },4000);
    if(i===7){
        clearTimeout(timeout)
    }
}     //output-anonymous()       continue run to 10 time
// ===========================================================

