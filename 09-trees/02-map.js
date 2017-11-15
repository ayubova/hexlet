// BEGIN (write your solution here)
const map = (f, node) => {
    if (!node.children) {
      return {...f(node)}
    }
    return { ...f(node), children: (node.children || []).map(c => map(f, c))};
  
  };
  
  export default map;
  
  