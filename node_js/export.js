require('./addexport')
console.log('hello, good morning')

let temp ={
    name:'bidyut',
    address:'janadighi'
}
 

function getTemp(){
    return 'hello darling'
}

module.exports={
    tempVariable : temp,
    method :  getTemp
}