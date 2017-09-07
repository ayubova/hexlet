/* Реализуйте ленивую версию Enumerable.
 Интерфейс включает в себя следующие методы: select, where, orderBy, toArray. */

 class Enumerable {
  // BEGIN (write your solution here)
    constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  select(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.map(fn));
    return new Enumerable(this.collection.slice(), newOps);
      }

  orderBy(fn, dir = 'asc') {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.sort((a, b) => {
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
        }));
    return new Enumerable(this.collection.slice(), newOps);
    }
    // END


  where(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.filter(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }

  toArray() {
    return this.operations.reduce((acc, item) => item(acc), this.collection.slice());
  }

  // END
}

export default Enumerable;
