/*
You are given Two Numbers, A and B. If C = A + B. Find C.
Note: Round off the output to a single decimal place.
Sample Input :
1
1
Sample Output :
2
*/
var readline = require('readline');

var inp = readline.createInterface({
  input: process.stdin
});

var userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	console.log(Number(userInput[0])+Number(userInput[1]));
});
