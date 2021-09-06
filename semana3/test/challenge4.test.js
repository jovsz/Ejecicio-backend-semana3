const toArray = require("../challenge4");

test('Debería regresar [["a", 1], ["b", 2]] con el objeto { a: 1, b: 2 }', () => {
    expect(toArray({ a: 1, b: 2 })).toEqual([["a", 1], ["b", 2]]);
});

test('Debería regresar [["shrimp", 15], ["tots", 12]] con el objeto { shrimp: 15, tots: 12 }', () => {
    expect(toArray({ shrimp: 15, tots: 12 })).toEqual([["shrimp", 15], ["tots", 12]]);
});

test('Debería regresar un arreglo vacio con {}', () => {
    expect(toArray({})).toEqual([]);
});
