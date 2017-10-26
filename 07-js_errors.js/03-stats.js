/* Задача состоит в том, чтобы реализовать тип Stats и его формирование посредством динамической диспетчеризации благодаря подтипам Node.

Stats.js
Реализуйте тип Stats со следующим интерфейсом:

constructor
isFile()
isDirectory() */

// BEGIN
export default class {
    constructor(file, directory) {
      this.file = file;
      this.directory = directory;
    }
  
    isFile() {
      return this.file;
    }
  
    isDirectory() {
      return this.directory;
    }
  }
  // END

  /* Node.js
Реализуйте надтип Node, интерфейсом которого являются функции:

getStats()
getName() */

import Stats from './Stats';

// BEGIN
export default class {
  constructor(name) {
    this.name = name;
  }

  getStats() {
    return new Stats(this.isFile(), this.isDirectory());
  }

  getName() {
    return this.name;
  }
}
// END

/* Dir.js, File.js
Реализуйте подтипы Dir и File (надтип Node). Варианты использования этих типов можно увидеть в файле HexletFs.js.*/
import Node from './Node';

// BEGIN
export default class extends Node {
  isDirectory() {
    return true;
  }

  isFile() {
    return false;
  }
}
// END

import Node from './Node';

// BEGIN
export default class extends Node {
  constructor(name, body) {
    super(name);
    this.body = body;
  }

  getBody() {
    return this.body;
  }

  isDirectory() {
    return false;
  }

  isFile() {
    return true;
  }
}
// END
