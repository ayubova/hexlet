// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const make = (m,n) => cons(m,n);
export const numer = rat => car(rat);
export const denom = rat => cdr(rat);
export const toString = (rat) => `${numer(rat)} / ${denom(rat)}`;
export const isEqual = (rat1, rat2) => {
  if (numer(rat1) / denom(rat1) === numer(rat2) / denom(rat2)) {
    return true;
  }
  else {
    return false;
  }
};
export const add = (rat1, rat2) => {
  return make ((numer(rat1) * denom(rat2) + numer(rat2) * denom(rat1)), (denom(rat1) * denom(rat2)));
};

 export const sub = (rat1, rat2) => {
   return make ((numer(rat1) * denom(rat2) - numer(rat2) * denom(rat1)), (denom(rat1) * denom(rat2)));
 };

 export const mul = (rat1, rat2) => {
   return make(numer(rat1) * numer(rat2), denom(rat1) * denom(rat2));
 };

 export const div = (rat1, rat2) => {
   return make(numer(rat1) * denom(rat2), denom(rat1) * numer(rat2));
 };


// END
