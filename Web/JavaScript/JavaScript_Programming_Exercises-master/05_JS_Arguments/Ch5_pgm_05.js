// Using the square function

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

function cube(number){
  return number*number*number;
}

console.log(cube(2));
console.log(cube(3));
console.log(cube(4));
console.log(cube(5));

function squareRoot(number){
  return Math.sqrt(number);
}

console.log("The square root of 9 is "+squareRoot(9));
console.log("The square root of 9 is "+squareRoot(16));
console.log("The square root of 9 is "+squareRoot(25));
console.log("The square root of 9 is "+squareRoot(36));
/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */