/*Given 2 numbers N,M. Find their difference and check whether it is even or odd.
Sample Testcase :
INPUT
5 5
OUTPUT
even
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(oddEven(data))
});
var oddEven=function(n){
n=n.split(" ")
var l=parseInt(n[0]),r=parseInt(n[1]);
if (((l-r)%2==0) ||((r-l)%2==0)){
    return("Even")
}else{
return "Odd"}}
