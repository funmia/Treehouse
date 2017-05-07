function getRandomNumber(lower, upper) {

//test if both arguments are numbers
if ( isNaN(lower) || isNaN(upper) ) {
  throw new Error('Both arguments must be numbers')
} else {
//generate a random number between the upper and the lower value.
    var random = Math.floor( Math.random() * (upper - lower + 1)) + lower;
    return random;
  }
}

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(35, 80));
console.log(getRandomNumber(1000, 20000));
console.log(getRandomNumber(15, 'four'));
