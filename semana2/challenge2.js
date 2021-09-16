function divisibleByLeft(n) {
    //Implementación
    const digits = n.toString().split('');
    const result = [];
    digits.forEach((number, i) => {
        if(((number / digits[i-1]) % 1) === 0) {
            result.push(true);
        }else { 
            result.push(false);
        } 
    });
    return result;
}

module.exports = divisibleByLeft;