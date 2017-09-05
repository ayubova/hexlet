// card.js //

import { getMethod } from './generic'; // eslint-disable-line
import { contents } from './type'; // eslint-disable-line

export const getName = self =>
  getMethod(self, 'getName')(contents(self));

// BEGIN (write your solution here)
export const damage = (self, health) =>
getMethod(self, 'damage')(contents(self), health);
// END

// generic.js //

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data'; // eslint-disable-line
import { attach, typeTag, contents } from './type'; // eslint-disable-line

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
   const searchMethod = (methods) => {
    if (typeTag(obj) === typeTag(head(methods)) && methodName === car(contents(head(methods)))) {
    return cdr(contents(head(methods)));
  }
  return searchMethod(tail(methods));
   };
   return searchMethod(methods);
  // END
};

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };

  // simpleCard.js //

  import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic'; // eslint-disable-line
import { attach } from './type'; // eslint-disable-line

const defmethod = definer('SimpleCard');

const make = (name, damagePoints) =>
  attach('SimpleCard', cons(name, damagePoints));

export default make;

defmethod('getName', self => car(self));

defmethod('damage', (self, health) => cdr(self));
