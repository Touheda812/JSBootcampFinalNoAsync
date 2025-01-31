function mostVowels(str) {
  // nice work!
    const words = str.split(' ');
    let maxVowelCount = 0;
    let maxVowelWord = '';
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let vowelCount = 0;
  
      for (let j = 0; j < word.length; j++) {
        const letter = word[j].toLowerCase();
        // it might be nice to make a vowels variable and use includes method so not so many || but that's a nitpick. Nice job overall!
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
          vowelCount++;
        }
      }
  
      if (vowelCount > maxVowelCount) {
        maxVowelCount = vowelCount;
        maxVowelWord = word.toLowerCase();
      }
    }
  
    return maxVowelWord;
  }

module.exports = { mostVowels };
