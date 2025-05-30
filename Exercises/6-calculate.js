'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const array = new Array(9);
  for (let i = 0; i <= 9; i++)
    array[i] = average(square(i), cube(i));
  return array;
};

module.exports = { square, cube, average, calculate };
