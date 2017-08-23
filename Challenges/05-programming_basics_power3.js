// BEGIN (write your solution here)
const isPowerOfThree = (num) => {
  for (let i = 1; num % 3 === 0; i++) {
    num = num / 3;
      }
      return num === 1;
};
export default isPowerOfThree;
// END
