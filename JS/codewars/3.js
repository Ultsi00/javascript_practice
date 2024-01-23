/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "moOse" = false
isIsogram "aba" = false
*/

function isIsogram(str) {
    let dictionary = {}
    let temp;

    for (const c of str) {
        temp = c.toLowerCase()
        if (dictionary[temp])
            dictionary[temp]++
        if (dictionary[temp] > 1)
            return false
        else
            dictionary[temp] = 1
    }
    return true
}

str0 = "abcde"  // true
str1 = "abcae"  // false
str2 = "abcdC"  // false
console.log(isIsogram(str0))
console.log(isIsogram(str1))
console.log(isIsogram(str2))