// Реализуйте и экспортируйте функцию по умолчанию, которая находит пересечение двух массивов.//

import 'babel-polyfill';

// BEGIN (write your solution here)
const intersection = (arr1, arr2) => arr1.filter(value => arr2.includes(value));
export default intersection;
// END
