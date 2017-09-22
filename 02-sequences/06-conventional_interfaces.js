import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString,  map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line

import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)
export const extractHeaders = elements => {
  const filteredElements = filter(element => is('h2', element), elements);
  return map(element => node('p', value(element)), filteredElements);
};
 export const wordsCount = (tagName, word, elements) => {
  const filteredElements = filter(element => is(tagName, element), elements);
  return reduce((element, acc) => wc(word, value(element)) + acc, 0, filteredElements);
 };

// END
