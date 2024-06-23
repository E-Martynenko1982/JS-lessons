let memoResult = 0



export const add = (num) => {
  memoResult += num;
};

export const decrease = (num) => {
  memoResult -= num;
};


export const reset = () => {
  memoResult = 0;
};

export const getMemo = () => {
  return memoResult
};


