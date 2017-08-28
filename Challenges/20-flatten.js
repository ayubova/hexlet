/*Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный список.

const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

// (1, 2, 3, 5, 4, 3, 2)*/

// eslint-disable-next-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const flatten = (list) => {
  const func = (item, acc) => {
    if (!isList(item)) {
      return cons(item, acc);
    }
    if (isEmpty(item)) {
      return acc;
    }
      return func(tail(item), func(head(item), acc));
  };
  return reverse(reduce(func, l(), list));
};

export default flatten;

// END
