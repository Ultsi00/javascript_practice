// TYPE CONVERSION
// Commonly used type conversions are Number(), String(), Boolean():
let code = "7";
let x = 3;
code = Number(code);
console.log(code + x);	            // > 10	//w/o conversion > 73

console.log([1,2]+"a");		        // > 12a
console.log([1,   2  , "b" ]+"a");	// > 12ba