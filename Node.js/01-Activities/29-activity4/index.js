
// 1. funnyCase makes each letter in a string the opposite case as the one before
const funnyCase = (string) => {
  
    let newString = "";
    for (let i = 0; i < string.length; i++) {
  
      if (i % 2 === 0) newString += string[i].toLowerCase();
      else newString += string[i].toUpperCase();
    }
  
    
    return newString;
  };
  
  // Prints 'You can't just do whatever you want all the time!'
  console.log(funnyCase("You can't just do whatever you want all the time!"));