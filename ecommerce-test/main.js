
const{add,sub,mul} = require('./add')




module.exports = {
    doAdd :(a,b) => add(a,b),
    doSub :(a,b) => sub(a,b),
    doMul :(a,b) => mul(a,b)
}