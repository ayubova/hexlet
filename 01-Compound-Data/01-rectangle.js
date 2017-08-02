// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeRectangle = (startPoint, width, height) => cons(startPoint, cons(width,height));
export const startPoint = (rectangle) => car(rectangle);
export const height = (rectangle) => cdr(cdr(rectangle));
export const width = (rectangle) => car(cdr(rectangle));
export const square = (rectangle) => width(rectangle) * height(rectangle);
export const perimeter = (rectangle) => (2 * (width(rectangle) + height(rectangle)));
export const containsTheOrigin = (rectangle) => {
    const lowerRightPoint = makePoint(getX(startPoint(rectangle)) + width(rectangle), getY(startPoint(rectangle)) - height(rectangle));
    return quadrant(startPoint(rectangle)) === 2 && quadrant(lowerRightPoint) === 4;
  };
