//test callback
function fatchData(callback){
   setTimeout(()=>{
    callback("testing callback")
   },2000)
}
test('test call back',(done)=>{
    function callback(data){
       try{
        expect(data).toBe('testing callback')
        done()
       } catch(err){
        done(err)
       }
    }
    fatchData(callback)
})



//test promise
async function testPromise(){
   return Promise.resolve(4)                                     //jodi ekhane resolve kora hoy tahole console.log (in then)asbe
   //return Promise.reject('hey test promise is error')             //jodi ekhane reject kora hoy tahole console.log (in catch)asbe
 }
 
    test('test promise', ()=>{
   //test.only('test promise', ()=>{            //callback.test.js e 2 ta file test hocche jodi ami ektake run korete  chai tahole (test.only) use korte hobe
   testPromise().then((data)=>{
      console.log('in then')
    expect(data).toBe(4)
   }).catch(err =>{
      console.log('in catch')
    expect(err).toBe('hey test promise is error')
   })
 
 })