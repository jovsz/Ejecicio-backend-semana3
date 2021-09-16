function isEqual(objInput1, objInput2) {
    //Implementación
    const obj1 = Object.entries(objInput1);
    const obj2 = Object.entries(objInput2);
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

module.exports = isEqual;