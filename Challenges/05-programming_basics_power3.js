const isPowerOfThree = (num) => {

  for (let i = 1; num % 3 === 0; i++) {
      num = num / 3;
  }
  if (num === 1) {
    return true;
  }
      return false;
      };

export default isPowerOfThree;
