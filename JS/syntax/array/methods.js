//ARRAYS
// Arrays can have mixed datatypes:
let arr_a = ["yes", 5, false];
console.log(arr_a);			    // > [‘yes’, 5, false]
console.log(arr_a[0]);			// > yes

// Adding elements to the end of an array:
let arr_b = ['1st', '2nd'];
arr_b.push('3rd');
console.log(arr_b);			    // > ['1st', '2nd', ‘3rd’]

// Elements can be removed from the end of an array and not assigned or assigned directly:
let str = arr_b.pop();
console.log(arr_b);			    // > ['1st', '2nd']
console.log(str);			    // > 3rd

// Adding elements to the beginning of an array:
arr.unshift('0');
console.log(arr_b);			    // > ['0', '1st', '2nd']

// Elements can be removed from the beginning of an array and not assigned or assigned directly:]
let arr_c = ['a', 'b', 'c'];
arr.shift();
console.log(arr_c);			    // > [‘b’, ‘c’]

// Finding index of a specific element:
let arr_d = ['x', 'y', 'z', 'k'];
let target = arr_d.indexOf('z');
console.log(target);			// > 2

// Length is a property of an array, not a method. Thus no parentheses with it:
let len = arr_d.length;
console.log(len);			    // > 4

// Splice() logic:
//  Splice(arg0, arg1, i0, i1, …, in)
//      arg0=start index, arg1=how many indeces starting from arg0 to remove
//      i=optional elements to add to the array beginning from arg1.

/*
    Exercise: Create an array which consists of  'red', 'green, and 'blue' . Add 'black' at the end. 
    Remove 'red' and swap the position of 'green' and 'blue'. Add 'yellow' to the first index.
*/
let arr = ['r0', 'g1', 'b2'];
arr.push('black');
let i_r0 = arr.indexOf('r0');
arr.splice(i_r0, 1);
let i_g1 = arr.indexOf('g1');
let i_b2 = arr.indexOf('b2');
let temp = arr[i_g1];
arr[i_g1] = arr[i_b2];
arr[i_b2] = temp;
arr.unshift('y');
console.log(arr);