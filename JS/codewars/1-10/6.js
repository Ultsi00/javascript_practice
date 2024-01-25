/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z 
at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers 
and punctuation.
*/

//use regex
function isPangram(str){
    let dictionary = {}
    let count = 0
    const regex = /[a-z]/

    for (const c of str) {
        temp = c.toLowerCase()
        if (regex.test(temp)) {
            if (!dictionary[temp]) {
                dictionary[temp] = 1
                count++
            }
        }
    }
    if (count != 26)
        return false
    else
        return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("abcsgfds"))