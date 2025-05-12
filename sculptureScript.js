const sculptureList = require('./data.js'); // import data.js

// const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }

// Create an empty array to store the results
const sculptureListLengths = [];

// Iterate through each object in sculptureList
for (const sculpture of sculptureList) {
    const lengths = {};
    // Iterate through each key in the current sculpture object
    for (const key in sculpture) {
        if (sculpture.hasOwnProperty(key)) {
            // Get the length of the value and assign it to the new object
            lengths[key] = sculpture[key].length;
        }
    }
    // Push the new lengths object to sculptureListLengths
    sculptureListLengths.push(lengths);
}

// Log the sculptureListLengths object to the console to verify results
console.log(sculptureListLengths);
