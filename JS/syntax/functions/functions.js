//FUNCTIONS
//  Function declaration:
function printLines(count) {
    console.log(`${count} lines`);
}
printLines(5);					// > 5 lines


//  Default argument:
function printLines(count = 10) {
    console.log(`${count} lines`);
}
printLines();					// > 10 lines
printLines(5);					// > 5 lines
//  Default argument is more convenient to be the last argument:
function print0(name = "Bob", action) {
    console.log(`${name} is doing ${action}`);
}
function print1(action, name = "Frank") {
    console.log(`${name} is doing ${action}`);
}
print0(undefined, "work");			// > Bob is doing work
print1("work");						// > Frank is doing work

//  'null' ignores default argument:
function print2(name = "Matt") {
    console.log(`${name} is the name`);
}
print2(undefined);					// > Matt is the name
print2(null);						// > null is the name


//  Rest parameter '...' enabled undefined amount of arguments..
//  Function can only have one rest parameter, 
//      and it must be the last one in argument list.
function print2(...args){
    console.log(args);
}
function print3(name, ...args){
    console.log(`${name} sent these: ${args}`);
}
print2("a","b","c");				// > ['a', 'b', 'c']
print3("Bob", 1, 2, 'X');			// > Bob sent these: 1,2,X



