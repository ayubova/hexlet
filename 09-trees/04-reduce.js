// BEGIN (write your solution here)
const reduce = (f, tree, acc) => {
    
      const newAcc = f(acc, tree);
    
     console.log(newAcc)
     return tree.type === 'directory' ?
        (tree.children || []).reduce((iAcc, n) => reduce(f, n, iAcc), newAcc) : newAcc;
    };
    
    export default reduce;
    // END