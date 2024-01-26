

//first occcurance
let str0 = "This is a string. The string with a simple name."
let test0 = str0.replace("string", "UNDEFINED")
console.log(test0)

//all occurances
let str1 = "A car is a vehicle. It can be named car, if preferred."
let test1 = str1.replace(/car/g, "ITEM")
console.log(test1)

//join array elements with '---' separator
let arr0 = ['first', 'second', 'third', 'fourth']
let joined = arr0.join('---')
console.log(joined) 