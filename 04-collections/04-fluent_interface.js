/* Select
Реализуйте метод select, который отображает (принцип работы как у функции map) коллекцию, другими словами, извлекает из элементов коллекции нужные данные и возвращает объект с новой (отображенной) коллекцией из этих данных.

OrderBy
Реализуйте метод orderBy, который сортирует коллекцию на основе переданных данных.

Принимаемые параметры:

Функция, возвращающая значение, по которому будет происходить сортировка.
Направление сортировки: asc - по возрастанию, desc - по убыванию (по-умолчанию asc). */
class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END

  // BEGIN (write your solution here)
  orderBy(fn, dir = 'asc') {
    this.collection.sort((a, b) => {
      if (dir === 'asc') {
        if (fn(a) > fn(b)) {
          return 1;
        }
        if (fn(a) < fn(b)) {
          return -1;
        }
        return 0;
      }
      if (dir === 'desc') {
        if (fn(a) < fn(b)) {
          return 1;
        }
        if (fn(a) > fn(b)) {
          return -1;
        }
        return 0;
      }
        });
    return this;
    }
  // END

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
