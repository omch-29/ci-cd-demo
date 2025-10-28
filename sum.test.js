import sum from './sum.js';


describe("test for sum function",()=>{
    test("add 3+2 equals 5",()=>{
    expect(sum(3,2)).toBe(5);
});
test("add -1+2 equals 1",()=>{
    expect(sum(-1,2)).toBe(1);
});
test("add -5+-5 equals -10",()=>{
    expect(sum(-5,-5)).toBe(-10);
});
})
