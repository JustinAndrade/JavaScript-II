// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length)
});
// answer ↑↑




function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.pop());
}

last(items, function(lastItem) {
  console.log(lastItem)
});
// answer ↑↑




function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(10, 20, function(result){
  console.log(result)
});
// answer ↑↑




function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y)
}

multiplyNums(2, 5, function(result) {
  console.log(result)
});
// answer  ↑↑




function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    console.log(item);
  } else {
    console.log(`${item} is not in the list!`)
  }
  };

contains('Pencil', items, function(item) {
  console.log(item)
});



/* STRETCH PROBLEM */

let duplicateArray = ['Steak', 'Potatoes', 'Broccolli', 'Carrots', 'Steak', 'Potatoes'];

function removeDuplicates(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i]) 
    return cb;
  };
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

let duplicateFree = [];

console.log(removeDuplicates(duplicateArray, function(index) {
  if (duplicateArray[i] === duplicateArray[i])
  console.log(duplicateFree.push(index));
}));

console.log(duplicateFree);
