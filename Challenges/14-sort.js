// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sort = (elements) => {
 if (isEmpty(elements)) {
   return l();
 }
 const pivot = head(elements);
 const less = filter(element => element < pivot, elements);
 const greaterAndEqual = filter(element => element >= pivot, elements);

 return concat(sort(less), concat(l(pivot), sort(tail(greaterAndEqual))));
};

export default sort;

// END
