const sumDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < length(numAsStr); i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)
const isHappyNumber = (num) => {
  for (let i = 1; i < 10; i++) {
    if (sumDigits(num) === 1) {
      return true;
    }
    num = sumDigits(num);
    }
    return false;
  };


export default isHappyNumber;
