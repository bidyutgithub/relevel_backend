let intervalID=setInterval(printFn,2000)
    let count=0;
    function printFn(){
        console.log('heyy i am running after 2 sec');

        count++;
        console.log(count)
        if(count===6){
            clearInterval(intervalID)
        }
    }    //output-6 time run ---'heyy i am running after 2 sec'
