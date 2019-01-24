// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function helloWorld(name) {
  const user = name;
  const message = 'Welcome to JavaScript!'
  
  console.log(`Hello ${user}`);
  
  function welcome() {
    console.log(`${user}, ${message}`)
  }
  welcome();
}

helloWorld('Justin');

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => {
    return count += 1;
};
}

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

  // Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => {
      return count += 1;
    },
    decrement: () => {
      return count -= 1;
    }
  }
};

const value = counterFactory();

console.log(value.increment());
console.log(value.increment());
console.log(value.increment());
console.log(value.decrement());