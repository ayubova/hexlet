/*Создайте функцию isPerfect, которая принимает число и возвращает true,
 если оно совершенное, и false в ином случае.
Совершенное число — это положительное целое число, равное сумме его
 положительных делителей (не считая само число).
  Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.*/

// BEGIN (write your solution here) (write your solution here)
const isPerfect = (num) => {
  let result = 1;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result += i;
    }
  }
  return num === result;
};
// END

export default isPerfect;
