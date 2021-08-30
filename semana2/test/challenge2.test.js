const divisibleByLeft = require("../challenge2");

test("Probando 73312", () => {
    expect(divisibleByLeft(73312)).toEqual([false, false, true, false, true]);
});

test("Probando 1", () => {
    expect(divisibleByLeft(1)).toEqual([false]);
});

test("Probando 635", () => {
    expect(divisibleByLeft(635)).toEqual([false, false, false]);
});

test("Probando 748", () => {
    expect(divisibleByLeft(748)).toEqual([false, false, true]);
});