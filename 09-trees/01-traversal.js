// BEGIN (write your solution here)
const downcaseFileNames = (node) => {
    if (node.type === 'directory') {
      return { ...node, children: (node.children || []).map(downcaseFileNames) };
    }
    return { ...node, name: node.name.toLowerCase() };
  };
  
  export default downcaseFileNames;
  // END
  