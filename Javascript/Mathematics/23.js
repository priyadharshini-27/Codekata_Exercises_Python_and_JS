/*Given a number N, print the product of the digits.
Input Size : N <= 100000000000
Sample Testcase :
INPUT
2143
OUTPUT
24
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(product(parseInt(data)))
});
var m=1,product=function(n){
while (n!=0){
	r=n%10
	m=m*r
	n=parseInt(n/10)}
return(m)
    
}
