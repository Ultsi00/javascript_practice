/* 1)   Initialize containers*/
// array
let arr = ['ds', 'as'];
// dictionary (=object)
let dic = {'sds': 100, 'asd': 200};
// nested dictionary (=object)
let dic1 = {'first' : {name: 'bob', nb: 2}, 'second' : {name: 'frank', nb: 3}};


/* 2)   Modify containers*/
// array
arr.push('xxx');                    //adds new element
arr[3] = 'hjh';                     //adds new element

// dictionary
dic["jkh"] = 900;                   //adds new element
dic.hux = 200;                      //adds new element

// nested dictionary
let temp = {name: 'sally', nb: 9};
dic1['third'] = temp;               //adds new element


/* 3)   Access containers */
// array
console.log(arr);
console.log(arr[1]);

// dictionary
console.log(dic);
console.log(dic['sds']);

// nested dictionary
console.log(dic1);
console.log(dic1['first']);
console.log(dic1['second'].name);
