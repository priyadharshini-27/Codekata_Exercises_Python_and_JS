/*You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. 
Find Simple Interest.
Print the output up to two decimal places (Round-off if necessary).
(S.I. = P*T*R/100)
Sample Input :
1000 2 5
Sample Output :
100.00
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(interset(data))
});
var interset=function(n){
    n=n.split(" ");
   var s=(n[0]*n[1]*n[2])/100;
   return (s.toFixed(2))
}
