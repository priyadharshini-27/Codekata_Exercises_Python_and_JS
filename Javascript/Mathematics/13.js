/*
Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.
Sample Testcase :
INPUT
5 5
OUTPUT
yes
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(mulMod((data)))
});
var mulMod=function(n){
    n=n.split(' ');
    a=parseInt(n[0]),b=parseInt(n[1]);
if ((a*b)==(Math.sqrt(a*b))**2){
    return("yes")}
else{
    return("no")
    }
}
