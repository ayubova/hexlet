import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line
import { Dir, File } from 'hexlet-fs'; // eslint-disable-line


const getPathParts = filepath =>
  filepath.split(path.sep).filter(part => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return null;
    }
    return current.getMeta().getStats();
  }

  mkdirSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new Dir(base));
  }

  // BEGIN (write your solution here)
  mkdirpSync(path) {
   return getPathParts(path).reduce((subtree, part) => {
     if (!subtree) {
       return false;
     }
     const current = subtree.getChild(part);
     if (!current) {
       return subtree.addChild(part, new Dir(part));
     }
     if (current.getMeta().getStats().isFile()) {
       return false;
     }
        console.log(`${JSON.stringify(this, null, 4)}\ncurrent:${JSON.stringify(current, null, 4)}`);
         return current;
   }, this.tree);
 }

 touchSync(path) {
   const parts = getPathParts(path);
   const name = parts[parts.length - 1];
   const parent = this.tree.getDeepChild(parts.slice(0, -1));
   if (!parent || !parent.getMeta().getStats().isDirectory()) {
     return false;
   }
   return parent.addChild(name, new File(name));
 }



 readdirSync(filepath) {
    const current = this.findNode(filepath);
    if (!current || current.getMeta().getStats().isFile()) {
      return false;
    }
    return current.getChildren()
      .map(child => child.getMeta().getName());
  }

 rmdirSync(path) {
   const parts = getPathParts(path);
   const name = parts[parts.length - 1];
   const parent = this.tree.getDeepChild(parts.slice(0, -1));
   const current = this.tree.getDeepChild(parts);
   if (!current || !current.getMeta().getStats().isDirectory() || current.hasChildren()) {
     return false;
   }
   parent.removeChild(name);
 }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
