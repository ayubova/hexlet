// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const take = (n, elements) => {
  if (n === 0 || isEmpty(elements)) {
    return l();
  }
    return cons(head(elements), take(n - 1, tail(elements)));
};
 export default take;

// END
