function decodeInput(input) {
    let decoded = '';
    let i = 0;
    while (i < input.length) {
      const chunkSize = input[i] === 's' ? 3 : 2;
      const chunk = input.substring(i, i + chunkSize);
      let decodedChunk = '';
      for (let j = chunkSize - 1; j >= 0; j--) {
        decodedChunk += chunk[j];
      }
      decoded += decodedChunk;
      i += chunkSize;
    }
    const halfLength = decoded.length / 2;
    const firstHalf = decoded.substring(0, halfLength);
    const secondHalf = decoded.substring(halfLength);
    return firstHalf + ' ' + secondHalf;
  }
  
  
console.log(decodeInput('tluciffiDsIsihTgnizamAoSsIsihT'))