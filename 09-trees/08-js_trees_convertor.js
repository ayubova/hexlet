// BEGIN (write your solution here)
const convert = array => array.reduce((acc, arr) => {
    acc[arr[0]] = arr[1] instanceof Array ? convert(arr[1]) : arr[1];
    return acc;
  }, {});


export default convert;
// END
