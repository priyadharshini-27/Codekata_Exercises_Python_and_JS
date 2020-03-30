/*Count the number of digits of a given number N.Size of the integer ranges from 1
Sample Testcases :
INPUT
548
OUTPUT
3
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(size(data))
});
var size=function(n){
var c=0;
while (n!=0){
	n=parseInt(n/10);
	c+=1;}
return(c)
	}
