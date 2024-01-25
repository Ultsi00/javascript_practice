/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which 
category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether 
the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

// [age, handicap]
// senior: age >= 55, handicap > 7

function openOrSenior(data) {
    let answer = []
    for (let pair in data) {
        if (data[pair][0] >= 55 && data[pair][1] > 7)
            answer.push("Senior")
        else
            answer.push("Open")
    }
    return answer
}

let data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
console.log(openOrSenior(data))