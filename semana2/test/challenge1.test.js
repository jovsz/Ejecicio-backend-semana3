const twoSums = require("../challenge1");

test("Prueba del arreglo [2,7,11,15]", () => {
    expect(twoSums([2,7,11,15], 9)).toHaveLength(2);
    expect(twoSums([2,7,11,15], 9)).toEqual(expect.arrayContaining([1,0]));
});

test("Prueba del arreglo [3,2,4]", () => {
    expect(twoSums([3,2,4], 6)).toHaveLength(2);
    expect(twoSums([3,2,4], 6)).toEqual(expect.arrayContaining([1,2]));
});

test("Prueba del arreglo [3,3]", () => {
    expect(twoSums([3,3], 6)).toHaveLength(2);
    expect(twoSums([3,3], 6)).toEqual(expect.arrayContaining([0,1]));
});

test("Prueba del arreglo [7,4,6,2]", () => {
    expect(twoSums([7,4,6,2], 8)).toHaveLength(2);
    expect(twoSums([7,4,6,2], 8)).toEqual(expect.arrayContaining([2,3]));
});