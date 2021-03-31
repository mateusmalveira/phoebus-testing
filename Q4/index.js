function compareVersion(versionA, versionB) {
  const messageError = "Formato incorreto, formato correto ex:  1.3.4.5";
  try {
    //Split versionA and versionB in new Array
    let verARR = versionA.split(".");
    let verBRR = versionB.split(".");
    //if the array size to less than 4 return error.
    if (
      verARR.length !== 4 ||
      verARR === undefined ||
      verBRR.length !== 4 ||
      verBRR === undefined
    )
      return messageError;
    for (var i = 0; i < verARR.length; i++) {
      // Convert version number to integer
      verARR[i] = parseInt(verARR[i]);
      verBRR[i] = parseInt(verBRR[i]);
      // if array index number is not a number return error.
      if (isNaN(verARR[i]) || isNaN(verBRR[i])) return messageError;
      //If version A is greater than B return -1
      if (verARR[i] > verBRR[i]) return 1;
      // If version A is less than B return -1
      if (verARR[i] < verBRR[i]) return -1;
    }
    // If A is equal to B return 0;
    return 0;
  } catch (err) {
    return (messageError = "Formato incorreto, formato correto ex:  1.3.3.5");
  }
}

// show console
console.log(compareVersion("1.5.4.0", "1.5.4.1"));
