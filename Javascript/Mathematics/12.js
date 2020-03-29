/*Given a number N, print 'yes' if it is a multiple of 13 else print'no'.
Sample Testcase :
INPUT
26
OUTPUT
yes
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(divisible(parseInt(data)))
});
var divisible=function(n){
if (n%13==0){
	return("yes")}
else{
	return("no")
}}
