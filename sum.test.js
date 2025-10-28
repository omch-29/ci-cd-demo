import sum from './sum.js';


describe("test for sum function",()=>{
    test("add 3+2 equals 5",()=>{
    expect(sum(3,2)).toBe(5);
});
test("add -1+2 equals 5",()=>{
    expect(sum(-1,2)).toBe(1);
});
})
