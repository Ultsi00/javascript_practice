/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one 
in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// bitwise operations work with 32bit integers
//program is for n <= 32bit
var countBits = function(n) {
    let count = 0
    let comparison = "1"

    for (let i = 0; i < 32; i++) {
        if (((Number)("0b" + comparison) & n) > 0)
            count++
        comparison = comparison + "0"
    }
    return count
}

console.log(countBits(1234))

/*
approach idea for over 32bit integers:
- take modulo of the input_nb with the highest 2^n, which is lower than input_nb. 
    if the remainder is still over max int, repeat for the remainder.
- once youve found the bits over 32bit, add these to 'count'
- use the a/m 'AND' loop for the last part, which is <= max int
*/
