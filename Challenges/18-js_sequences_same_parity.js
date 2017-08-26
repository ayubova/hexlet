/*Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список и возвращает новый,
 состоящий из элементов, у которых такая же четность, как и у первого элемента входного списка.*/

// eslint-disable-next-line
import { l, isEmpty, head, tail, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sameParity = (elements) =>
filter(element => Math.abs(element) % 2 === Math.abs(head(elements)) % 2, elements);
export default sameParity;

// END
