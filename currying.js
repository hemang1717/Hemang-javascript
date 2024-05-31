// Currying is a functional programming technique that transforms a function with multiple arguments
//  into a sequence of functions, each taking a single argument.
// This allows partial application of the function's arguments, enabling more flexible and reusable code
function curryAdd(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  // Usage
  const curriedAdd = curryAdd(1)(2)(3); // returns 6
  console.log(curriedAdd);

function multiply(x,y){
    return x*y;
}
const multiplyByTwo=multiply.bind(this,2)
console.log(multiplyByTwo(5))

const multiplyByThree=multiply.bind(this,3)
console.log(multiplyByThree(5))