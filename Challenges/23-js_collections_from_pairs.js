/* Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив,
состоящий из массивов-пар, и возвращает объект, полученный из этих пар.

fromPairs([['fred', 30], ['barney', 40]]);
// → { 'fred': 30, 'barney': 40 } */

import 'babel-polyfill';

// BEGIN (write your solution here)
const fromPairs = pairs => pairs.reduce((acc, arr) => {
  acc[arr[0]] = arr[1];
  return acc;
}, {});

export default fromPairs;

// END
