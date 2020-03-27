const add=(a,b)=> a+b;
const generateGreeting=(name)=>{
    return `Hello ${name}`
}
test('should add two numbers',()=>{
    const result=add(3,4);
    if(result!==7){
        throw new Error(`You added 4 and 3. The result id ${result}. Expected 7`)
    }
});
test('should show greeting ',()=>{
    const result=generateGreeting('Piyush')
    expect(result).toBe('Hello Piyush')
})
