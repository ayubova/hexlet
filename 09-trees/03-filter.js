// BEGIN (write your solution here)
const filter = (f, tree) => {
    if (!f(tree)) {
      return null;
    }
  return node.type === 'directory' ?
      { ...updatedNode, children: (node.children || []).map(n => map(f, n)) } : updatedNode;
  };
    return { ...tree, children: (tree.children || []).map(c => filter(f, c)).filter(v => v) };
  };
  
  
  export default filter;
  // END