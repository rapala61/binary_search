/* eslint-disable */

function prettyFormatArr(arr) {
  console.log('[');
  const sections = Math.floor(arr.length / 4);
  let count = 0;

  for (var i = 0; i <= sections; i++) {
    let output = ``;

    if (arr[count]) {
      output += `${arr[count]}`;
    }
    if (arr[count+1]) {
      output += `, ${arr[count+1]}`;
    }
    if (arr[count+2]) {
      output += `, ${arr[count+2]}`;
    }
    if (arr[count+3]) {
      output += `, ${arr[count+3]}`;
    }
    console.log(output);
    count += 4;
  }
  console.log(']');
}

function askForInput() {
  console.log('\nwhat number do you wish to find? [or type: quit]');
}

module.exports = {
  prettyFormatArr,
  askForInput
}
