const { prettyFormatArr, askForInput } = require('./lib/helpers');
const { bSearch } = require('./lib/bSearch');

// require the random array generator
const util = require('util');
const arr1 = require('./lib/seed')();

// output array so we can choose the number to search for
prettyFormatArr(arr1);
askForInput();

// Make our script listen for input in the stdin stream
process.stdin.resume();
process.stdin.setEncoding('utf8');

// when input happens and Enter is pressed
process.stdin.on('data', (text) => {
  // parse spaces and quotes out of the input
  const input = util.inspect(text.trim()).replace(/[^0-9]/g, '');

  // make it into a integer
  const numToSearch = parseInt(input, 10);

  // Only Binary Search if the input is a number
  if (!isNaN(numToSearch)) {
    // Binary Search for the value we input
    console.log(`${numToSearch} is at index: ${bSearch(arr1, numToSearch)}`);
    askForInput();
  }

  // If we type 'quit' and press Enter, the script will continue to run.
  if (text === 'quit\n') {
    process.exit();
  }
});
