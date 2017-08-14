// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const has = (list, num) => {
  if (isEmpty(list)) {
    return false;
  }
  else if (head(list) === num) {
    return true;
  }
  else {
    return has(tail(list), num);
  }
};

export const reverse = (list) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    return iter(tail(items), cons(head(items), acc));
  };
  return iter(list, l());
};

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }
  return cons(head(list1), concat(tail(list1), list2));
};

// END
