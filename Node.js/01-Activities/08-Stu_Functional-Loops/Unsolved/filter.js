const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const isEven = (number) => number % 2 === 0;

const evenNumbers = originalArray.filter(isEven);
console.log(evenNumbers);



console.log(evenNumbers);
console.log(originalArray);

const isPrime = (number) => {

  const primeArray = originalArray.filter(isPrime);
  console.log(primeArray);
  console.log(originalArray);

  for (let i = 2; i < num; i++) {
    
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};


// TODO: Describe how filter is working in this example. What will the value of primeArray be? 
const primeArray = originalArray.filter(isPrime);

console.log(primeArray);
// Filter works by running isPrime on all array items and returns a new array containing Prime values 

// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be? 
const moreThan5Array = originalArray.filter(num => num > 5);
console.log(moreThan5Array);
// Its filtering out any number that is greater than 5 