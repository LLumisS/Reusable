'use strict';

const rangeOdd = (start, end) => {
  const Arr = [];
  if (start % 2 === 0)
    start++;
  while (end >= start) {
    Arr.push(start);
    start += 2;
  }
  return Arr;
};

module.exports = { rangeOdd };
