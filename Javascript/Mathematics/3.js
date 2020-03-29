/*Given a number N, print yes if the number is a multiple of 7 else print no.
Sample Testcase :
INPUT
49
OUTPUT
yes
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(multiple(data))
});
var multiple=function(N){
if (N%7==0){
    return("yes")
}else{
    return("no")
}}
