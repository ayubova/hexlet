import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  let result = lines1.reduce((acc, e, ind) => {
    if (e === lines2[ind]) {
      return acc;
    }
    if (lines2[ind] === '') {
      return [...acc, [e, ""]]
    }
    if (!lines2[ind]) {
      return [...acc, [e, null]]
    }
    return [...acc, [e, lines2[ind]]]
  }, []);

  if (lines2.length > lines1.length) {
    for (let i = lines1.length; i < lines2.length; i++) {
      result.push([null, lines2[i]])
    }
  }
  return result;
  };


// BEGIN (write your solution here)
export default (path1, path2, callback) => {
  fs.readFile(path1, 'utf8', (err1, data1) => {
        if (err1) {
      callback(err1);
      return;
    }
    if (!err1) {
      fs.readFile(path2, 'utf8', (err2, data2) => {
        if (err2) {
      callback(err2);
      return;
    }
        if (!err2) {
          const result = compare(data1, data2);
          callback(null, result);
        }
      });
    }
  });
};
// END