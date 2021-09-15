function countPrimes(number) {
    //Implementación
    let numPrimos = [];
    
    for(let i = 2; i < number; i++) {
        let total = 0;
        for(let j = 2; j < i; j++) {
            if(i % j === 0){
                total ++;
            }
        }
        if(total % i == 0) {
            numPrimos.push(i);
        }
    }
    return numPrimos.length;
}

module.exports = countPrimes;