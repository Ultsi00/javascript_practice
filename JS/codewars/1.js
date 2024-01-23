/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always 
capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamel(str) {
    let result = ""
    let convertNext = false

    for (const c of str) {
        if (c == '_' || c == '-') {
            convertNext = true
            continue
        }
        if (convertNext == true) {
            result = result + c.toUpperCase()
            convertNext = false
        }
        else
            result = result + c;
    }
    return result
}

str0 = "one_word"
str1 = "one-word"
str2 = "One_word"
console.log(toCamel(str0))
console.log(toCamel(str1))
console.log(toCamel(str2))
