// global variables
let newAlarmArr = [];

// Function to filter array elements to be only numbers
const filter = function(array) {
  return array.filter(x => Number(x));
};

// Function to run timer
const timer = function(array) {
  array.sort();

  for (let element of array) {
    let counter = Number(element) * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, counter);
  }
};

// get command line args and set to array
const alarmArr = process.argv.slice(2);

// check if undefined or empty and has no numbers
if (alarmArr.length === 0 || alarmArr.every(isNaN)) {
  console.log("Error : Input cannot be used for timer!");
}

// check if array contains non numerical values
if (alarmArr.some(isNaN)) {
  newAlarmArr = filter(alarmArr);
  timer(newAlarmArr);
} else {
  timer(alarmArr);
}



// If input has a negative number : skip that no. and proceed with the rest
// If input has a string : skip that and proceed with the rest
// If input is numbers but not in asc order : should sort in ascending