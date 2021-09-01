function twoSums(numbs, target) {
    //Implementación
    return numbs.map((num1,i) => numbs.map((num2,j) => {
        if (num1 + num2 === target && i !== j) {
            return [i, j];
        }
    })).flat().filter((num) => num !== undefined)[0];

}

module.exports = twoSums;