
// 1
test ('testing the object', ()=>{
     const data = {one:1};
     data['two'] = 2;
     expect(data).toEqual({one:1, two:2});
     
})

// 2
function  sum(a,b){
    return a+b;
}
test ('test sum method', ()=>{
    
expect(sum(2,3)).toBe(5)
//expect(sum(2,3)).not.toBe(6)
    
})



// 3
test('test null', ()=>{
    let a = null
    expect(a).toBeNull()
})

// 4
test('test null', ()=>{
    let a = undefined
    expect(a).toBeUndefined()
})



// 5
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
    });



  // 6
     test('undefined', ()=>{
        let n = 5;
        expect(n).toBeDefined();
        })
        test('testing toBeTruthy and toBeFalsy', ()=>{
        let a = 7;
        let b = true;
        let c = undefined;
        expect(a).toBeTruthy();
        expect(b).toBeTruthy();
        expect(c).toBeFalsy();
        })




  const animals = ['cat', 'dog']
  test('testing array',()=>{
    expect(animals).toContain('cat')
  })

  function compileError(){
    throw new Error('hey it is error')
  }
  test('testing error', ()=>{
    expect(() =>compileError()).toThrow()
    expect(() =>compileError()).toThrow('hey it is error')
  })