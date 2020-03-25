/*You are provided with the radius of a circle "A". Find the length of its circumference.
Note: In case the output is coming in decimal, roundoff to 2nd decimal place. In case the input is a negative number, print "Error".
Sample Input :
2
Sample Output :
12.57
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (r) => {
	console.log(circle(r))
});
var circle=function(n){
   var s=((2)*(n)*(22/7));
   return (s.toFixed(2))
}
