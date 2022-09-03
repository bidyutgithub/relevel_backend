//jest.fn()
//jest.spyOn()
//jest.mock()

test('test mock function',()=>{
    const mockFunction = jest.fn()
    .mockReturnValueOnce('first return')
    .mockReturnValueOnce('second return')

    const result1 = mockFunction('first Value')
    const result2 = mockFunction('second Value')
   //expect(result).not.toBeUndefined()
    expect(result1).toBe('first return')
    expect(result2).toBe('second return')
    expect(mockFunction).toHaveBeenNthCalledWith(1, "first Value")
    expect(mockFunction).toHaveBeenNthCalledWith(2, "second Value")
    expect(mockFunction).toHaveBeenCalledTimes(2)
})



function forEach(item, callback){
    for(let i=0; i<item.length;i++){
        console.log(callback(item[i]))
    }
}


test('test forEach function',()=>{
    const mockCallBack = jest.fn(x => x+4).mockReturnValueOnce('text')

    forEach([1,2],mockCallBack)

    expect(mockCallBack).toHaveBeenCalledTimes(2)
    expect(mockCallBack.mock.results[0].value).toBe('text')
})


const {createTestScheduler} = require('jest')
const testObject = require('./add')
const {doAdd,doSub,doMul} = require('./main')


 test.only('testing SpyOn Mathod',()=>{
    const addMock = jest.spyOn(doAdd, 'add')


    const result =doAdd(1,3)
    expect(result).toBe(4)
    expect(addMock).toHaveBeenCalledTimes(1, 3)
 })