import { sep } from 'path';

const findFilesByName = (root, substr) => {
  const iter = (n, path, acc) => {
    if (n.type === 'file') {
        return n.name.includes(substr) ? [...acc, `${path}${sep}${n.name}`] : acc;
    }
    const newPath = n.name === '/' ? '' : `${path}${sep}${n.name}`;
    return n.children.reduce((cAcc, nn) => iter(nn, newPath, cAcc), acc);
  };

  return iter(root, '', []);
};

export default findFilesByName;