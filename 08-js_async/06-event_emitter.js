import EventEmitter from 'events';

class Tree extends EventEmitter {
  constructor(key, parent) {
    super();
    this.parent = parent;
    this.key = key;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getParent() {
    return this.parent;
  }

  // BEGIN
  addChild(key) {
    const child = new Tree(key, this);
    this.children.set(key, child);
    this.emit('add', child);

    return child;
  }

  removeChild(key) {
    const child = this.children.get(key);
    this.children.delete(key);
    this.emit('remove', child);
  }
  // END
}

export default Tree;
