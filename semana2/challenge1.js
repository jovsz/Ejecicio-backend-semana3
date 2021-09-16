function twoSums(numbs, target) {
      //Implementación
      let result = ''
      const array = numbs
      const arrayResult = []
      
      for(let i = 0; i < numbs.length; i++) {
          for(let j = 0; j < array.length; j++){
              if(numbs[i] !== array[j]){
                  result = numbs[i] + array[j];
                  if(result === target){
                      arrayResult.push(numbs.indexOf(numbs[i]), numbs.indexOf(numbs[j]));
                      return arrayResult;
                  }
              }
          }
      } 
}

module.exports = twoSums;