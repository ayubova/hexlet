/* Реализуйте и экспортируйте по умолчанию функцию partialApply. Эта функция умеет частично применять один аргумент у переданной функции:

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);
f1(1); // => 2
f1(10); // => 1024 */


// BEGIN (write your solution here)
const partialApply = (f, arg) => a => f(arg, a);
export default partialApply;
// END