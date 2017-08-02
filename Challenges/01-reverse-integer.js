import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const reverseInt = (num) => {
  let newNum = num < 0 ? -num : num;

  for (let i = 0; i < length(str); i++) {
    result += str[length(str) -i - 1];
      }
 return num > 0 ? Number(result) : -Number(result);
 };
export default reverseInt;
// END
