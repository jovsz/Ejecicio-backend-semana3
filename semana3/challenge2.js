function minMax(aNumbs) {
    //Implementación
    let max = Math.max(...aNumbs);
    let min = Math.min(...aNumbs);

    const minMax = {min: min, max: max};
    return minMax;
}

module.exports = minMax;