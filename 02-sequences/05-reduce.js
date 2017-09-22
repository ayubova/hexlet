import { isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const reduce = (func, acc, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    const item = head(items);
    const newAcc = func (item, acc);
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
  };

  export const emptyTagsCount = (tagName, elements) => {
  const func = (element, acc) => {
    return is(tagName, element) && value(element) === '' ? acc + 1 : acc;
  };
  return reduce(func, 0, elements);
};

// END

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};
