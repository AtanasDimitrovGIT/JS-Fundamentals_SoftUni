function splitPascalCase(str) {
    const words = [];
    let currentWord = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char === char.toUpperCase()) {
        if (currentWord !== '') {
          words.push(currentWord);
          currentWord = '';
        }
      }
  
      currentWord += char;
    }
  
    if (currentWord !== '') {
      words.push(currentWord);
    }
  
    return words.join(', ');
  }