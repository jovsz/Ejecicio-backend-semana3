const minMax = require("../challenge2");

test("Numero mas chico y más grande de [1,2,3,4,5]", () => {
    expect(minMax([1,2,3,4,5])).toEqual(expect.objectContaining({
        min: expect.any(Number),
        max: expect.any(Number),
    }));
    expect(minMax([1,2,3,4,5]).max).toBe(5);
    expect(minMax([1,2,3,4,5]).min).toBe(1);
});

test("Numero mas chico y más grande de [2334454, 5]", () => {
    expect(minMax([2334454, 5])).toEqual(expect.objectContaining({
        min: expect.any(Number),
        max: expect.any(Number),
    }));
    expect(minMax([2334454, 5]).max).toBe(2334454);
    expect(minMax([2334454, 5]).min).toBe(5);
});

test("Numero mas chico y más grande de [4,6,2,7,3,10,9]", () => {
    expect(minMax([4,6,2,7,3,10,9])).toEqual(expect.objectContaining({
        min: expect.any(Number),
        max: expect.any(Number),
    }));
    expect(minMax([4,6,2,7,3,10,9]).max).toBe(10);
    expect(minMax([4,6,2,7,3,10,9]).min).toBe(2);
});

test("Numero mas chico y más grande de [41,6,21,70,3,10,9]", () => {
    expect(minMax([41,6,21,70,3,10,9])).toEqual(expect.objectContaining({
        min: expect.any(Number),
        max: expect.any(Number),
    }));
    expect(minMax([41,6,21,70,3,10,9]).max).toBe(70);
    expect(minMax([41,6,21,70,3,10,9]).min).toBe(3);
});