// BEGIN (write your solution here)
export const Zero = function (f) {
  return function (x) {
    return x;
  };
};

export const Succ = function (n) {
  return function (f) {
    return function (x) {
      return f(n(f)(x));
    };
  };
};
// END
