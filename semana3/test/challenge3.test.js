const mcm = require("../challenge3");

test("Mínimo Común Múltiplo de 9 y 18", () => {
    expect(mcm(9,18)).toEqual(18);
});

test("Mínimo Común Múltiplo de 8 y 5", () => {
    expect(mcm(8,5)).toEqual(40);
});

test("Mínimo Común Múltiplo de 17 y 11", () => {
    expect(mcm(17,11)).toEqual(187);
});

test("Mínimo Común Múltiplo de 20 y 9", () => {
    expect(mcm(20,9)).toEqual(180);
});