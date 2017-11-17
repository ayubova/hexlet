import { reduce } from 'hexlet-immutable-fs-trees'; // eslint-disable-line

// BEGIN (write your solution here)
const calculateDirSize = tree =>
  reduce((acc, node) => (node.type === 'file' ? acc + node.meta.size : acc), tree, 0);

  const du = tree => tree.children
  .map(n => [n.name, calculateDirSize(n)])
  .sort((a,b) => b[1] - a[1]);

  export default du;
// END
