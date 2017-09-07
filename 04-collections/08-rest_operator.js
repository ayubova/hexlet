/* Реализуйте метод where, основываясь на следующем интерфейсе:

Функция может принимать любое количество параметров, каждый из которых может быть либо функцией,
либо объектом. Для функций должна осуществляться простая фильтрация, для объектов нужно проверять
 соответствие элемента коллекции значениям по тем же ключам, что и в переданном объекте. */

 class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
  where(...theArgs) {
   const func = (coll,...theArgs) => theArgs.reduce((acc, item) => {
      if (typeof item === 'function') {
        return acc.filter(item);
      }
      return acc.filter(elem => Object.keys(item).every(e => item[e] === elem[e]));
  }, coll);
   return this.build(coll => func(coll,...theArgs));
  }
  // END

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

export default Enumerable;
