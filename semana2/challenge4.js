function landMass(name, area) {
    //Implementación    
    const worldMasa = 148940000;
    let info = [];
    if(area && name){
        let percent = (area*100)/worldMasa;
        let floatNum = ((Math.round(percent * 100)) / 100)
        const expect = {percent: floatNum , message: `${name} representa el ${floatNum}% de la masa de la tierra`}
        return expect;
    }
    return 0;
}

module.exports = landMass;