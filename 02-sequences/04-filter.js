import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const filter = (func, elements) => {
  const iter = (items, acc) => {
if (isEmpty(items)) {
  return reverse(acc);
}
if (func(head(items))) {
   return iter(tail(items), cons(head(items), acc));
   }
return iter(tail(items), acc);
 };
 return iter(elements, l());
 };
  

export const quotes = (elements) => {
  const filteredElements = filter(element => is('blockquote', element), elements);
  return map(element => value(element), filteredElements);
};

// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
