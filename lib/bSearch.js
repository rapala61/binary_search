// binary search function
// https://en.wikipedia.org/wiki/Binary_search_algorithm
function bSearch(arr, t) {
  // lower bound
  let l = 0;

  // upper bound
  let u = arr.length - 1;

  // middle point
  let m = Math.floor((u) / 2);

  // target index
  // If the target is not found, we return -1
  let tIndex = -1;

  while (m !== u) {
    if (t === arr[m]) {
      // We found it! break out of the loop
      break;

    // if the number we want is smaller than the value at the pivot
    } else if (t < arr[m]) {
      // bring the limit index down to what was the current index
      // thus making the search surface area smaller by about 50%
      u = m - 1;

    // if the number we want is larger than the value at the pivot
    } else if (t > arr[m]) {
      // bring the base index up to what was the current index
      // thus making the search surface area smaller by about 50%
      l = m + 1;
    }
    // Reposition our middle point index based on the upper and lower bounds
    m = Math.floor((u - l) / 2) + l;
  }

  // At this point. We either found the target, or the upper limit and middle point
  // are at the same index and took us out of the loop. If the latter, we need to check
  // if we find the target at this index.
  if (t === arr[m]) {
    tIndex = m;
  }

  return tIndex;
}

module.exports = {
  bSearch
};
