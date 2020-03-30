/*Given a number N, print its reverse.
Input Size : n <= 1000
Sample Testcase :
INPUT
10
OUTPUT
1
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(high(data))
});
var high=function(n){
var t=0;
while(n>0){
    var r=n%10;
    t=(t*10)+r;
    n=parseInt(n/10);
}return t
}
