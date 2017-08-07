import { length, toUpperCase, toLowerCase } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const invertCase = (str) => {
  let result = '';
   for(let i = 0; i < length(str); i++) {
      if (str[i] === toUpperCase(str[i])) {
      result += toLowerCase(str[i]);
    }
      else if (str[i] === toLowerCase(str[i])) {
      result += toUpperCase(str[i]);
    }
      else {
      result += str[i];
    }

  }

  return result;
};

export default invertCase;

// END
