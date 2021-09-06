const countPrimes = require("../challenge1");

test("Números primos que vayan antes del número 10", () => {
    expect(countPrimes(10)).toEqual(4);
});

test("Números primos que vayan antes del número 0", () => {
    expect(countPrimes(0)).toEqual(0);
});

test("Números primos que vayan antes del número 15", () => {
    expect(countPrimes(15)).toEqual(6);
});

test("Números primos que vayan antes del número 20", () => {
    expect(countPrimes(20)).toEqual(8);
});