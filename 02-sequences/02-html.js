// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const make = () => l();
export const node = (tag,text) => cons(tag,text);
export const name = (pair) => car(pair);
export const value = (pair) => cdr(pair);
export const append = (htmlList,element) => consList(element, htmlList);
export const toString = (dom) => {
  if(isEmpty(dom)) {
    return '';
  }
    return toString(tail(dom)) + `<${name(head(dom))}>${value(head(dom))}</${name(head(dom))}>`;
};
// END
