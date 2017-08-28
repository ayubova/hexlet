/*Напишите и экспортируйте функцию по умолчанию union, которая принимает на вход
 два списка и возвращает третий, являющийся объединением уникальных значений двух исходных списков.*/

// eslint-disable-next-line
import { l, isEmpty, cons, reduce, has, reverse, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const union = (list1, list2) => {
  const newList = reduce((element, acc) => cons(element, acc), list2, reverse(list1));
  return reverse(reduce((item, acc) => has(acc, item) ? acc : cons(item, acc), l(), newList));
};
export default union;
// END
