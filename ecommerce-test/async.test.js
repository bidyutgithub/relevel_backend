beforeEach(()=>{
    console.log('before each test')
})

afterEach(()=>{
    console.log('after each test')
})

beforeAll(()=>{
    console.log('before All test')
})

afterAll(()=>{
    console.log('after All test')
})

test('to be truthy',()=>{
    console.log('truthy')
    expect(4).toBeTruthy()
})

test('to be defined',()=>{
    console.log('defined')
    expect(4).toBeDefined()
})
