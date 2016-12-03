/* eslint-disable */

// require the random array generator
const arr1 = require('./bSearchSeed.js')();
const util = require('util');

// output array so we can choose the number to search for
console.log(arr1);
askForInput();

// Make our script listen for input in the stdin stream
process.stdin.resume();
process.stdin.setEncoding('utf8');

// when input happens and Enter is pressed
process.stdin.on('data', function (text) {

  // parse spaces and quotes out of the input
  const input = util.inspect(text.trim()).replace(/[^0-9]/g, '');

  // make it into a integer
  const numToSearch = parseInt(input, 10);

  // Only Binary Search if the input is a number
  if (!isNaN(numToSearch)) {

    // Binary Search for the value we input
    console.log(`\n\nThe needle is at index: ${bSearch(arr1, numToSearch)}`);
  }

  // If we type 'quit' and press Enter, the script will continue to run.
  if (text === 'quit\n') {
    process.exit();
  }
});

function askForInput() {
  console.log('what number do you wish to find? [or quit]');
}

// binary search function
// https://en.wikipedia.org/wiki/Binary_search_algorithm

function bSearch(arr, needle) {
  let baseIdx = 0;
  let limitIdx = arr.length - 1;
  let currIdx = Math.floor((limitIdx) / 2);
  let needleAt = -1;

  while (currIdx !== limitIdx) {
    if (needle === arr[currIdx]) {
      break;
    }else if(needle < arr[currIdx]) {
      limitIdx = currIdx;
    }else if(needle > arr[currIdx]) {
      baseIdx = currIdx + 1;
    }

    currIdx = Math.floor((limitIdx - baseIdx) / 2) + baseIdx;
  }

  if (needle === arr[currIdx]) {
    needleAt = currIdx;
  }

  return needleAt;
}
