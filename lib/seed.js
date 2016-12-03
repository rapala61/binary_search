const ITERATIONS = 2000000;
const MULTI_FACTOR = 10;

// should be smaller than MULTI_FACTOR
const RANDOM_UPLIMIT = 5;

module.exports = () => {
  const bigArray = [];
  for (let i = 1; i <= ITERATIONS; i += 1) {
    const factor = i * MULTI_FACTOR;
    bigArray.push(Math.floor(Math.random() * RANDOM_UPLIMIT) + factor);
  }
  return bigArray;
};
