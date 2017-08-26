/*Напишите и экспортируйте по умолчанию функцию zip, которая принимает на вход
 два списка и возвращает третий, в котором каждый элемент это список элементов
 исходных списков, стоящих на тех же позициях.*/


import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
const zip = (list1, list2) => {
  if (isEmpty(list1) || isEmpty(list2)) {
    return l();
  }
  const newHead = cons(head(list1), l(head(list2)));
  return cons(newHead, zip(tail(list1), tail(list2)));
};
export default zip;
// END
