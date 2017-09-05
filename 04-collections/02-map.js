/* Реализуйте и экспортируйте функцию wordsCount, которая принимает на вход два параметра: список слов и список стоп-слов. Задача функции вернуть объект типа Map, содержащий в себе частоту переданных слов. То есть, ключами являются сами слова, а значениями число повторений.

Слова могут быть в разных регистрах, а подсчет должен работать без учета регистра. Соответственно в результирующем наборе слова должны быть представлены в нижнем регистре.
Порядок слов в выходе должен совпадать с порядком появления новых слов во входном наборе
stopWords это список стоп-слов, то есть эти слова не должны попадать в результирующую структуру
const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]] */


import 'babel-polyfill';

// BEGIN (write your solution here)
export const wordsCount = (words, stopWords) => words.map(value => value.toLowerCase())
  .filter(value => !stopWords.includes(value))
  .reduce((acc, word) => !acc.has(word) ? acc.set(word, 1) : acc.set(word, acc.get(word) + 1),
    new Map());
// END
