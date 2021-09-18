'use strict';

const range = (start, end) => {
  const Arr = [];
  while (end >= start) {
    Arr.push(start);
    start++;
  }
  return Arr;
};

module.exports = { range };
