const isEqual = require("../challenge2");

test("Probando si los objetos {a: 1}, {a: 2} son iguales", () => {
    const obj1 = {a: 1};
    const obj2 = {a: 2};
    expect(isEqual(obj1, obj2)).toBeFalsy();
});

test("Probando si los objetos {a: 1, b: 2}, {a: 1, b: 2} son iguales", () => {
    const obj1 = {a: 1, b: 2};
    const obj2 = {a: 1, b: 2};
    expect(isEqual(obj1, obj2)).toBeTruthy();
});

test("Probando si los objetos {a: 1, b: 2, c: 0}, {a: 1, b: 2} son iguales", () => {
    const obj1 = {a: 1, b: 2, c: 0};
    const obj2 = {a: 1, b: 2};
    expect(isEqual(obj1, obj2)).toBeFalsy();
});