function largestPrimeFactor(number) {

  let primeFactors = [];
  
  for (let i = 2; i < number; i++){
   
    let prime = true;
    
    if (number % i === 0){ // Checks if i is a factor of number
      if (i === 2){
        primeFactors.push(i);
        prime = false;
      } else {
        for (let n = 0; n < primeFactors.length; n++){
          if (i % primeFactors[n] === 0){
            prime = false;
          }
        }
      }

      if (prime === true){
        primeFactors.push(i);
      }
      
    }
  }

  //console.log(primeFactors);
  return primeFactors;
}

console.log(largestPrimeFactor(600847));