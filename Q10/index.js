function compareElements(a, b) {
  // Checking if array A and B has the same size
  if (a.length !== b.length) return "As matrizes devem conter o mesmo tamanho!";
  // Checking if arrays has size equal 3
  if (a.length !== 3 || b.length !== 3)
    return "A matriz deve conter 3 elementos!";
  // Creating array of points
  let pts = [0, 0];
  // If the number of array A is greater than array b sum +1 in position 0.
  // If the number of array A is less than array b sum +1 in position 1.
  a.forEach((number, index) => {
    if (a[index] > b[index]) return (pts[0] += 1);
    if (a[index] < b[index]) return (pts[1] += 1);
  });
  // Return array points
  return pts;
}
//Show in console
console.log(compareElements([17, 28, 30], [99, 16, 8]));
