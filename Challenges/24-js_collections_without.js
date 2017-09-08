/* Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив
 и элементы, которые должны отсутствовать в возвращаемом массиве. */

 import 'babel-polyfill';

// BEGIN (write your solution here)
const without = (arr, ...theArgs) => arr.filter(value => !theArgs.includes(value));
export default without;
// END
