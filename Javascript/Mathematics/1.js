/*Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.
Sample Testcase :
INPUT
9 2
OUTPUT
odd*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(evenOdd(data))
});
var evenOdd=function(n){
n=n.split(' ');
var j=parseInt(n[0]),m=parseInt(n[1]);
if ((j+m)%2==0){
	return("even")}
else{
	return("odd")
}
}
