function keysAndValues(objInput) {
    //Implementación
    
    const sortObject = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {})
    let resultSort = sortObject(objInput);
    return [Object.keys(resultSort), Object.values(resultSort)];
    
    
}


module.exports = keysAndValues;