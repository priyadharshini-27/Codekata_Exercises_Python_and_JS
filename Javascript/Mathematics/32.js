/*Write a program to print the sum of the first K natural numbers.
Input Size : n <= 100000
Sample Testcase :
INPUT
3
OUTPUT
6
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(sum(parseInt(data)))
});
var sum=function(n){
var s=0
for (var number=0;number<=n;number++){
 s=s+number;   
}
return(s)}
