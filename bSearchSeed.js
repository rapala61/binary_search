/* eslint-disable */

module.exports = function() {
  let bigArray = [];
  for (var i = 1; i <= 100; i++) {
    let sum = i * 10;
    bigArray.push(Math.floor(Math.random() * 5) + sum);
  }
  return bigArray;
};
