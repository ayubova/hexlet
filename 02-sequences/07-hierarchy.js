// eslint-disable-next-line
import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)

const select = (tagName, elements) => reduce((item,acc) => {
  if (is(tagName, item)) {
    return consList(item, acc);
      }
      if (hasChildren(item)) {
        return concat(acc, select(tagName, children(item)));
      }
      return acc;
}, l(), elements);

export default select;
// END
