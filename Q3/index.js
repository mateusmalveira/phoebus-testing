// Generate Random Array
function generateArray(length = 10, min = 1, max = 10) {
  return Array.from(
    { length: length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

// Locate duplicate numbers
function locateDuplicate(a) {
  // Create array for duplicates
  let duplicates = [];
  // Create array for index
  let ind = [];
  // map array numbers and scroll numbers after from him.
  a.map((number, index) => {
    for (let i = index + 1; i < a.length; i++) {
      // If number match with number after from him and he not include in duplicate array...
      if (number === a[i] && !duplicates.includes(number)) {
        //push number to array of duplicates
        duplicates.push(number);
        //push index to array of indexs
        ind.push(i);
      }
    }
  });
  // if not exist numbers in array of duplicate returns -1
  if (duplicates.length === 0) return -1;
  //if lenght array of duplicates is 1 return number
  else if (duplicates.length === 1) return duplicates[0];
  //if has two or more numbers return the lowest index
  else {
    return a[ind.sort()[0]];
  }
}
//remove all duplicates
function removeDuplicate(a) {
  // Return array without duplicates
  return [...new Set(a)];
}

function main() {
  // Generate Array
  let a = generateArray(6);
  // let a = [2, 1, 3, 5, 3, 2];
  console.log(`Array A = ${a}`);
  let findDuplicate = locateDuplicate(a);
  // Find duplicate
  console.log(`Duplicate = ${findDuplicate}`);
  if (findDuplicate !== -1) {
    //Remove Duplicate
    let removeDup = removeDuplicate(a);
    console.log(`Remove Duplicate : ${removeDup}`);
  }
}

main();
