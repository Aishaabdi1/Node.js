const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop

// modern way of writing code //
moviePatrons.forEach(patron => console.log(patron.age));

// for loop that is equivalent to that //

for (let i = 0; i < moviePatrons.length; i++){
  const patron = moviePatrons[i]
  console.log(patron.age)
}

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value

const canWatchRatedR = moviePatrons.filter(patron => patron.age > 17);
console.log(canWatchRatedR);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

const cardedMoviePatrons = moviePatrons.map(patron => {
  // Copy the object being iterated over
  const pObj = { ...patron };
  // Do everything else the same
  if (patron.age >= 17) {
    patron.canWatchRatedR = true;
  } else {
    patron.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return patron;
});

console.log("Movie Patrons: ")
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);
