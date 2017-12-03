// BEGIN (write your solution here)
const objectify = (arr, fn) => arr.reduce((acc,value) => ({ ...acc, [fn(value)]: value }), {});

export default objectify;
// END
