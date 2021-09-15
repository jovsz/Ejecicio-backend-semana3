function mcm (a, b) {
  let resulta = [];
  let resultb = [];
  let result;

  if(a > b){
    for(let i = 1; i <= a; i++) {
      resulta.push((a * i));
      resultb.push((b * i)); 
    }
    resulta.forEach(element => {
      for(let j = 0; j < resultb.length; j++) {
        if(element === resultb[j]) {
          return result = element; 
        }
        if(result){break}
      }
    })  
  }
  
  if(b > a){
    for(let i = 1; i <= b; i++) {
      resulta.push((a * i));
      resultb.push((b * i)); 
    }
    resultb.forEach(element => {
      for(let j = 0; j < resulta.length; j++) {
        if(element === resulta[j]) {
          return result = element;
        }
        if(result){break}
      }
    }) 
  }
  return result;
}



module.exports = mcm;