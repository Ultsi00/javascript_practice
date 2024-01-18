// for-of-loop
str = "what";
for (const c of str)
    console.log(c);
// > w
// > h
// > a
// > t
/*----------------------------------------------------------------------*/

// .find()
//  - returns 'undefined' if the given element is not found

//  returns 15 if 15 is found in nb array: 
const nb = [1, 4, 15, 2, 13]
let found0 = nb.find(function(x) {
    return x == 15
})
console.log(found0)      // > 15


//  returns first number in the array, which is over 10
let found1 = nb.find(function(x) {
    return x > 10
})
console.log(found1)     // > 15
//  returns first number in the array, which is over 10. Arrow function style
let found2 = nb.find(x => x > 10)
console.log(found2)     // > 15


//  using .find() to define if an array contains a specific keyvalue pair:
const myObj = {
    Items: [{name : "bench", price : 100}, {name : "table", price : 200}],
    owners: [{name : "Bob"}, {name : "Hillary"}],
    isOwner: function(inputName) {
        let answer = this.owners.find(function(ownerList) {
            return ownerList.name == inputName      // returns true or undefined
        })
        if (answer)
            console.log("Is owner")
        else
            console.log("Not owner")
    },
}
myObj.isOwner("Bob")            // > Is owner
myObj.isOwner("Frank")          // > Not owner

/*----------------------------------------------------------------------*/