/*
You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.

Sample Input :
2
3
Sample Output :
6
*/
var read = require('readline');

var inp = read.createInterface({
  input: process.stdin
});

var userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	console.log(Number(userInput[0])*Number(userInput[1]));
});
