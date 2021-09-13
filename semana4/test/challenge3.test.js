const isSpecialArray = require("../challenge3");

test("Debería arrojar true al probar el arreglo [2, 7, 4, 9, 6, 1, 6, 3]", () => {
    expect(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])).toBeTruthy();
});

test("Debería arrojar false al probar el arreglo [2, 7, 9, 1, 6, 1, 6, 3]", () => {
    expect(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])).toBeFalsy();
});

test("Debería arrojar false al probar el arreglo [2, 7, 4, 9, 6, 1, 6, 3]", () => {
    expect(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])).toBeFalsy();
});
