/*
This kata is designed to test your ability to extend the functionality of built-in classes. 
In this case, we want you to extend the built-in Array class with the following methods: square(), 
cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers

Note: the original array must not be changed in any case!

Example:
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/

Array.prototype.square = function() {
    let arrCpy = []
    for (let element of this) 
        arrCpy.push(element * element)
    return arrCpy
}
Array.prototype.cube = function() {
    let arrCpy = []
    for (let element of this)
        arrCpy.push(element * element * element)
    return arrCpy
}
Array.prototype.average = function() {  
    let sum = 0
    for (let element of this)
        sum = sum + element
    return (sum / this.length)
}
Array.prototype.sum = function() {
    let sum = 0
    for (let element of this)
        sum = sum + element
    return sum
}
Array.prototype.even = function() {
    let arrCpy = []
    for (let element of this) {
        if (element % 2 == 0)
            arrCpy.push(element)
    }
    return arrCpy
}
Array.prototype.odd = function() {
    let arrCpy = []
    for (let element of this) {
        if (element % 2 != 0)
            arrCpy.push(element)
    }
    return arrCpy
}

var numbers = [1, 2, 3, 4, 5]

console.log(`square: ${numbers.square()}`)
console.log(`cube: ${numbers.cube()}`)        
console.log(`average: ${numbers.average()}`)
console.log(`sum: ${numbers.sum()}`)
console.log(`even: ${numbers.even()}`)
console.log(`odd: ${numbers.odd()}`)