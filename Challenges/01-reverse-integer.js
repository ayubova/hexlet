import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const reverseInt = (number) => {
    let absNumberAsString = String(Math.abs(number));
    let result = '';
    for (let i = 0; i < length(absNumberAsString); i++) {
      result += absNumberAsString[length(absNumberAsString) -i - 1];
      }
 return number > 0 ? Number(result) : -Number(result);
 };

export default reverseInt;
// END
