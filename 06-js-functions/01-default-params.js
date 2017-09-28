/* Реализуйте и экспортируйте по умолчанию функцию substr, которая возвращает подстроку из переданной строки. Подстрокой называется любая выбранная часть строки. Функция принимает на вход три параметра:

Строка
Начальный индекс. Значение по умолчанию: 0.
Длина подстроки. Значение по умолчанию: длина строки.
У этой функции множество вариантов поведения:

Если переданная длина отрицательная, то внутри она становится единицей
Если переданная длина + начальный индекс выходят за границу строки, то берется подстрока от индекса до конца строки
Если начальный индекс отрицательный, то внутри он становится нулем
По-умолчанию возвращается сама строка. */

import { getLength } from './strings';

// BEGIN (write your solution here)
const substr = (string, start = 0, length = getLength(string)) => {
  if (start >= getLength(string)) {
    return '';
  }
  if (length < 0) {
    length = 1;
  }
  if (start < 0) {
    start = 0;
  }
  if (length + start > getLength(string)) {
    length = getLength(string) - start;
  }
  let result = '';
  for (let i = start; i <= start + length - 1; i++) {
    result += string[i];
  }
  return result;
};

export default substr;

