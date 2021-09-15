function toArray(object) {
    //Implementación
    if(object){
        return Object.entries(object);    
    }
    return []
}



module.exports = toArray;