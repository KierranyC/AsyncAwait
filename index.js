const { readFile } = require('fs').promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;

  words.forEach(word => {
    tally[word] = (tally[word] || 0) + 1;
    if (!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
}

const findPassword = async () => {
  // Your code goes here
  try {
    const mostFrequentWord1 = await readFile('poems/starting-poem.txt', 'utf-8')
    console.log(mostFrequentWord(mostFrequentWord1))
  }
  catch (error) {
    console.error(error)
  }
  const mostFrequentWord2 = await readFile('poems/happy.txt', 'utf-8')
  console.log(mostFrequentWord(mostFrequentWord2))
  const mostFrequentWord3 = await readFile('poems/you.txt', 'utf-8')
  console.log(mostFrequentWord(mostFrequentWord3))
}

findPassword()
