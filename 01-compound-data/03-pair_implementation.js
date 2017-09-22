export const cons = (x, y) => m => m(x, y);

// BEGIN (write your solution here)
export const car = pair => {
   const f = (x,y) => {
     return x;
     };
     return pair(f);
};

export const cdr = pair => {
  const h = (x,y) => {
     return y;
     };
     return pair(h);
};

// END
