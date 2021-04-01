//Function sum x
function sum(X) {
  // Declare array a and b
  let [a, b] = [
    [1, 2, 3, X, 8, 9],
    [X, 6, 5, 4],
  ];
  // Declare value of sum
  const [value_a, value_b] = [30, 22];

  // Sum the array values
  function sumArr(arr) {
    return arr.reduce((total, number) => {
      return total + number;
    }, 0);
  }
  //if value of sum a and b is equal to the values of a and b, the function return x value and true.

  return [X, sumArr(a) === value_a && sumArr(b) === value_b];
}

// variable stop
let stop = false;
// Variable result
let result_x;

//The function will increment i in function sum(X) to search of the common a and b values.
for (let i = 0; !stop; i++) {
  let result = sum(i);
  if (result[1]) {
    stop = true;
    result_x = result[0];
  }
}
//Print in console
console.log(result_x);
