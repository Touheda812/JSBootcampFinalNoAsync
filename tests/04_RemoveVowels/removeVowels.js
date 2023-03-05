// function removeVowels() {

// }

// module.exports = { removeVowels };
// great!
function removeVowels(str) {
    // create an array of vowels to remove
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
    // use the Array.prototype.includes() method to remove vowels
    return str.split('').filter(char => !vowels.includes(char)).join('');
  }
  module.exports = { removeVowels };