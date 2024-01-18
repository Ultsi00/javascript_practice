/*
Exercise: Create a dictionary. Input: String. Output: Keyvalue pair(s). 
Key is a character, Value is character’s count.
*/

function countChars(str) {
	let ct = {};
	for (const c of str) { // for(let i = 0; i < str.length; i++) 
		if (c == ' ')
			continue;
		else if (ct[c])
			ct[c]++;
		else
			ct[c] = 1;
	}
	return ct;
}

let str = "hello hello";
let result = {};
result = countChars(str);
console.log(result);