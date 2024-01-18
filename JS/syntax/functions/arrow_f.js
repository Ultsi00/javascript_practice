//  Arrow function:
//  - implicit return, no need for return statement if single expression is present
//  - can be shorter than default function declaration
//  - parentheses are needed with 0 and > 1 arguments
const arrFunc = doubleThis => 2 * doubleThis;
const print = (first, second) => {
    console.log(`${first} and ${second}`);
}
console.log(arrFunc(5));					// > 10
print("Bob", "Hill");						// > Bob and Hill


// 'arguments' keyword:
function printer() {
    console.log(arguments);
}
printer(1, 2);							    // > [1, 2]

const printer = (...arguments) => console.log(arguments);
printer('a', 'b', 'c');						// > ['a', 'b', 'c']