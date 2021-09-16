function isSpecialArray (specialArr) {
  let sequence = [];
  let result = true;
  specialArr.forEach((element, index) => {
    if((element%2) === 0){
      sequence.push(true);
    }else{
      sequence.push(false);
    }

  })

  for(let i=0; i < sequence.length; i++){
    if(sequence[i] === sequence[i+1]){
      return result = false;
    }
  }
  return result;
}



module.exports = isSpecialArray;