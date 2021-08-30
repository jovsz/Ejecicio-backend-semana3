const arrayOfMultiples = require("../challenge3");

test("Arreglo de multiplos para 7", () => {
    expect(arrayOfMultiples(7, 5)).toEqual([7, 14, 21, 28, 35]);
});

test("Arreglo de multiplos para 12", () => {
    expect(arrayOfMultiples(12, 10)).toEqual([12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);
});

test("Arreglo de multiplos para 17", () => {
    expect(arrayOfMultiples(17, 6)).toEqual([17, 34, 51, 68, 85, 102]);
});

test("Arreglo de multiplos para 13", () => {
    expect(arrayOfMultiples(13, 7)).toEqual([13, 26, 39, 52, 65, 78, 91]);
});