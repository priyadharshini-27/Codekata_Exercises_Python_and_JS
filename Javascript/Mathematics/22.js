/*Given 3 numbers a,b,c print a*b mod c.
Sample Testcase :
INPUT
5 3 2
OUTPUT
1
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(mulMod((data)))
});
var mulMod=function(n){
    n=n.split(" ");
    return ((parseInt(n[0]))*(parseInt(n[1])))%(parseInt(n[2]));
}
