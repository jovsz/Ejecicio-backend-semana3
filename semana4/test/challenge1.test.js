const keysAndValues = require("../challenge1");

test("Probando el objeto { a: 1, b: 2, c: 3, d: 4 }", () => {
    const obj1 = { a: 1, b: 2, c: 3, d: 4 };
    const outputObj1 = [["a", "b", "c", "d"], [1, 2, 3, 4]];
    expect(keysAndValues(obj1)).toEqual(outputObj1);
});

test("Probando el objeto { a: 'Apple', b: 'Microsoft', d: 'Amazon', c: 'Google' }", () => {
    const obj2 = { a: "Apple", b: "Microsoft", d: "Amazon", c: "Google" };
    const outputObj2 = [["a", "b", "c", "d"], ["Apple", "Microsoft", "Google", "Amazon"]];
    expect(keysAndValues(obj2)).toEqual(outputObj2);
});

test("Probando el objeto { key1: true, key2: false, key3: undefined }", () => {
    const obj3 = { key1: true, key2: false, key3: undefined };
    const outputObj3 = [["key1", "key2", "key3"], [true, false, undefined]]
    expect(keysAndValues(obj3)).toEqual(outputObj3);
});