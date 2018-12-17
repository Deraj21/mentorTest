//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: str => {
    str.split('').reduce((result, val) => {
      result.unshift(val);
      return result;
    }, []).join('');
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: arr => {
    const dubs = [];
    return arr.filter(val => {
      if (dubs.indexOf(val) !== -1) {
        return false;
      } else {
        dubs.push(val);
        return true;
      }
    })
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: str => {
    return str
      .split(' ')
      .map( word => {
        return word
          .split('')
          .map((letter, i) => i === 0 ? letter.toUpperCase() : letter )
          .join('');
      })
      .join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: str => {
    const vowels = 'aeiouAEIOU'.split('');
    return str.split('').reduce((total, val) => {
      return vowels.indexOf(val) === -1 ? total : total + 1;
    }, 0)
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: n => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: "Hello undefined"
}
