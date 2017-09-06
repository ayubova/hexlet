// Реализуйте функции select, orderBy используя подход без мутации состояния. //

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    // BEGIN (write your solution here)
    const selected = this.collection.map(fn);
    return new Enumerable(selected);
    // END
  }

  orderBy(fn, dir = 'asc') {
    // BEGIN (write your solution here)
const orderedBy = this.collection.slice().sort((a, b) => {
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
    return new Enumerable(orderedBy);
    }
    // END


  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
