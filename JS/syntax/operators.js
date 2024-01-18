// OPERATORS
// Arithmetic operators are the same as in C/C++, except exponentiation:
console.log(2**3);		// > 8

// Assignment operators are the same as in C/C++.

// Comparison operators are the same as in C/C++, 
// except “strict equal / strict not equal”. This compares datatype and value:
let a = "str0";
let b = "str0";
let c = 5;
if (a === b) {
    console.log("dt(a) is dt(b) + values are equal.");
}
if (a !== c) {
    console.log("dt(a) is not dt(c) or values are not equal.");
}

// typeof operator returns the type of data as string:
console.log(typeof 5);			    // > number
console.log(typeof "hello");		// > string
