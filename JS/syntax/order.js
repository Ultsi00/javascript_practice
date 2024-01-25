/*
Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will 
only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function swapOrder(arr, order) {
    let tempStr
    let tempOrder
    for (let j = 0; j < order.length - 1; j++) {
        for (let i = 0; i < order.length - 1; i++) {
            if (order[i] > order[i + 1]) {
                tempStr = arr[i + 1]
                tempOrder = order[i + 1]
                arr[i + 1] = arr[i]
                order[i + 1] = order[i]
                arr[i] = tempStr
                order[i] = tempOrder
            }
        }
    }
}

function order(words){
    if (words.length == 0)
        return ""

    let order = []
    for(let i = 0; i < words.length; i++) {
        if (/\d/.test(words[i]))
            order.push((Number)(words[i]))
    }

    let arr = words.split(' ')
    swapOrder(arr, order)

    let str = ""
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i]
        if (i < arr.length - 1)
            str = str + " "
    }
    return str
}

let words = "w6t is2 Thi1s JuS7 T4est 3a yr8 jok5"
console.log(order(words))