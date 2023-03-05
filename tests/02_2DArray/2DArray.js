function twoDArray(arr) {
    let flattened = arr.flat();
    let sum = 0;
    for (let i = 0; i < flattened.length; i++) {
      // if you have flattened shouldn't need to check that flattened[i] is a number but doesn't hurt anything
      // still passes without if check.
      // if (typeof flattened[i] === 'number') {
        sum += flattened[i];
      // }
    }
    return sum;
  }

module.exports = { twoDArray };
