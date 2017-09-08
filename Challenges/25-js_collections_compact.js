// Реализуйте и экспортируйте функцию по умолчанию, которая удаляет из массива все falsy элементы.//
 //К таким элементам относятся: false, null, 0, "", undefined, NaN.//

 import 'babel-polyfill';

// BEGIN (write your solution here)
export default arr => arr.filter(elem => !!elem);
// END
