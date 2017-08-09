import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here) (write your solution here)
const reverse = (string) => {
  if (length(string) === 0) {
    return '';
  }
  const reversedStr = string[length(string) - 1];
  return reversedStr + reverse(substr(string, 0, length(string) - 1));
};

export default reverse;

// END
