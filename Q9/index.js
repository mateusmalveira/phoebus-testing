/**
 * @prop {string} clientId:
 * @return {number} The check digit.
 */

//Split numbers in array
function slitNumbers(number) {
  return [...String(number)].map(Number);
}
//Sum array numbers
function sumDigits(numbers) {
  return numbers.reduce((a, b) => a + b);
}
//function digitoVerificador
function digitoVerificador(clientId) {
  //Convert to integer
  clientId = parseInt(clientId);
  //Split numbers in array
  const digits = slitNumbers(clientId);
  // Sum numbers
  let sum = sumDigits(digits);
  // if number is lower or equal to 9 return the number
  if (sum <= 9) {
    return sum;
    // if not, enter in loop and sum again
  } else {
    while (sum > 9) {
      let newDigits = slitNumbers(sum);
      sum = sumDigits(newDigits);
    }
    // Return number
    return sum;
  }
}
//Print on console
console.log(digitoVerificador("55555"));

// command node index.js
