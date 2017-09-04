/* Допишите логику функции run, которая содержит ядро игрового движка.

Алгоритм
Если здоровье игрока (которого атаковали на предыдущем шаге) меньше или равно 0, то обновляем лог и возвращаем наружу. Игра закончена.

В ином случае, берем рандомную карту, вычисляем урон, записываем новое здоровье, а также добавляем строчку в лог, используя формат:

const message = `Игрок '${name1}' применил '${cardName}'
  против '${name2}' и нанес урон '${damage}'`;
Повторяем.*/

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0 || health2 <= 0) {
      return consList(cons(cons(health1, health2), 'game is over'), log);
    }
    const card = random(cards);
    const damage = cdr(card)();
    const cardName = car(card);

    if (order === 1) {
      const message = `Игрок '${name1}' применил '${cardName}'
  против '${name2}' и нанес урон '${damage}'`;
      const newLog = consList(cons(cons(health1, health2 - damage), message), log);
      return iter(health1, name1, health2 - damage, name2, 2, newLog);
    }
    const message = `Игрок '${name2}' применил '${cardName}'
  против '${name1}' и нанес урон '${damage}'`;
    const newLog = consList(cons(cons(health1 - damage, health2), message), log);
    return iter(health1 - damage, name1, health2, name2, 1, newLog);
  };


  // END

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);
