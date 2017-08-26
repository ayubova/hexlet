//Напишите функцию diff, которая принимает два угла (integer), каждое от 0 до 360, и возвращает наименьшую разницу между ними.
// BEGIN (write your solution here)
const diff = (a, b) => Math.abs(b - a) <= 180 ? Math.abs(b - a) : 360 - Math.abs(b - a);

// END
export default diff;
