/*Сумма квадратов первых десяти натуральных чисел
 это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это
 (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти
натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference, которая принимает аргумент n и
возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных
чисел.*/

// BEGIN (write your solution here) (write your solution here)
const sumSquareDifference = (n) => {
  const iter = (num, sumOfSquares, sum) => {
    if (num === 0) {
      return sum * sum - sumOfSquares;
    }
    return iter(num - 1, sumOfSquares + num * num, sum + num);
  };
  return iter(n, 0, 0);
};
// END

export default sumSquareDifference;
