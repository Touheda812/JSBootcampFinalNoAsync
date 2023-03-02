function twoDArray(arr) {
    let flattened = arr.flat();
    let sum = 0;
    for (let i = 0; i < flattened.length; i++) {
      if (typeof flattened[i] === 'number') {
        sum += flattened[i];
      }
    }
    return sum;
  }

module.exports = { twoDArray };
