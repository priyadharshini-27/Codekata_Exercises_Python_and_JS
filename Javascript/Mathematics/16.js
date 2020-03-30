/*Given length L and breadth B of a farm, print the area of the farm upto 5 decimal decimals.
Sample Testcase :
INPUT
1.626 2.31
OUTPUT
3.75606
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(rectangle(data))
});
var rectangle=function(n){
   n=n.split(" ");
    var a=Number(n[0])*Number(n[1])
    return a.toFixed(5);
}
