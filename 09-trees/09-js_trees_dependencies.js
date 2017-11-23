import {uniq} from 'lodash'
// BEGIN (write your solution here)
// BEGIN (write your solution here)
const sortDeps = (deps) => {
  const iter = ([head, ...rest], result) => {
    const subDeps = deps[head];
  if (!head) {
    return result;
  }
  if (!subDeps.length) {
    return iter(rest, [...result, head]) 
     }
     if (subDeps.every(e => !rest.includes(e) || result.includes(e))) {
       return iter(rest, [...result, ...subDeps, head]);
     }
return subDeps.reduce((acc, property) => {
  if (acc.length || result.includes(property)) {
    return acc;
  }
  if (rest.includes(property)) {
    return iter([property, head, ...rest], result);
  }
}, []);
}
return uniq(iter(Object.keys(deps), []))
  }


export default sortDeps; 

// BEGIN
export default (deps) => {
  const add = (acc, node) => {
    const subDeps = deps[node];
    const subAcc = subDeps ? subDeps.reduce(add, []) : [];
    return { ...acc, ...subAcc, [node]: true };
  };
  const set = Object.keys(deps).reduce(add, []);
  return Object.keys(set);
};
// END


