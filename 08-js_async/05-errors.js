const noop = (...args) => {};

const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};

// BEGIN (write your solution here)
export default (coll, iteratee, callback = noop) => {
  const oncedCallback = once(callback);
  let completed = 0;
  const length = coll.length;
  if (length === 0) {
    callback(null, []);
  }

  const mappedColl = [];
  const iteratorCallback = (item, index, err, result) => {
    if (err) {
      oncedCallback(err);
      return;
    }
    if (result) {
      mappedColl[index] = item;
    }
    completed++;
    if (completed === length) {
      oncedCallback(err, mappedColl.filter(el => !!el));
    }
  };

  coll.forEach((item, index) => iteratee(item, iteratorCallback.bind(null, item, index)));
};
// END
