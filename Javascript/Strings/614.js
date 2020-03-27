/*Radha newly learnt about palindromic strings.
A palindromic string is a string which is same when read from left to right and also from right to left.
Help her in implementing the logic.
Sample Input :
NITIN
Sample Output :
1
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(sets(data))
});
var sets=function(string){
var newstr=string.split('').reverse().join('');
if (string==newstr){
	return(1)}
else{
	return(0)
}}
