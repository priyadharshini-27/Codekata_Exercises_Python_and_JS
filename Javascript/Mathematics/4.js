/*Given a number N, find its next immediate greater power of 2.
Input Size : N <= 1000
Sample Testcase :
INPUT
4
OUTPUT
8
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(power(data))
});
var power=function(n){
return((n)*(2))
	}
