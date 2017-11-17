import { sep } from 'path';

const findFilesByName = (root, substr) => {
  const iter = (n, ancestry, acc) => {
    if (n.type === 'file') {
      return n.name.includes(substr) ? [...acc, [ancestry, n.name].join(sep)] : acc;
    }
    const newAncestry = n.name === '/' ? '' : [ancestry, n.name].join(sep);
    return n.children.reduce((cAcc, nn) => iter(nn, newAncestry, cAcc), acc);
  };

  return iter(root, '', []);
};

export default findFilesByName;