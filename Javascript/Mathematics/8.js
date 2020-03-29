/*Given a floating point number with 1 decimal place round it off to nearest greater integer and print it.
Sample Testcase :
INPUT
2.6
OUTPUT
3
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(high(data))
});
var high=function(n){
return(Math.ceil(n))}
