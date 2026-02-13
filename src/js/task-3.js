// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
  let biggestWord = "";
  const stringArray = string.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    const word = stringArray[i];
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }
  return biggestWord;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
