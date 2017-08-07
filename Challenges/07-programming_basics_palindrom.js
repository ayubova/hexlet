import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here) (write your solution here)
const isPalindrome = (str) => {
if (str[0] === str[length(str) - 1]) {
  return true;
}
else {
  return false;
}

  return isPalindrome(substr(str,1,length(str) - 2));
};

export default isPalindrome;

// END
