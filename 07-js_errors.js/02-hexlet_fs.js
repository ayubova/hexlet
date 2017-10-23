import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line

// BEGIN (write your solution here)
const getPathParts = (path) => path.split('/').filter(e => e !== '');
// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }
/* Файловая система должна корректно обрабатывать пустые пути, делая внутри нормализацию. То есть, если ей передать путь ///etc/config//my///, то он транслируется в /etc/config/my.

HexletFs.js
Реализуйте следующие части интерфейса типа HexletFs.

isDirectory(path)

isFile(path)

mkdirSync(path)

touchSync(path) - создает пустой файл. На самом деле, в реальной файловой системе, команда touch меняет время последнего обращения к файлу, а побочным эффектом этой команды является создание файла в случае его отсутствия. По этой причине данной командой часто пользуются для создания файлов.

Пример:

files.isDirectory('/etc'); // false

files.mkdirSync('/etc');
files.isDirectory('/etc'); // true

files.mkdirSync('/etc/nginx');
files.isDirectory('/etc/nginx'); // true

files.isFile('/file.txt'); // false

files.touchSync('/file.txt');
files.isFile('/file.txt'); // true */

  // BEGIN (write your solution here)
  isDirectory(path) {
    const parts = getPathParts(path);
    const current = this.tree.getDeepChild(parts);
    return (current !== undefined) && (current.getMeta().type === 'dir');
  }

isFile(path) {
  const parts = getPathParts(path);
    const current = this.tree.getDeepChild(parts);
    return (current !== undefined) && (current.getMeta().type === 'file');
}

  mkdirSync(path) {
    const parts = getPathParts(path);
    const keys = parts.slice(0, parts.length - 1);
    const node = keys.length === 0 ? this.tree: this.tree.getDeepChild(keys);
    node.addChild(parts[parts.length - 1], {type: 'dir'});
  }
  
  touchSync(path) {
    const parts = getPathParts(path);
    const keys = parts.slice(0, parts.length - 1);
    const node = keys.length === 0 ? this.tree: this.tree.getDeepChild(keys);
    node.addChild(parts[parts.length - 1], {type: 'file'});
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
