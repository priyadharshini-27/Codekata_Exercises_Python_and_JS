/*Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
Sample Testcase :
INPUT
3
2 6
OUTPUT
yes
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	console.log(leftRight(userInput));
});
var leftRight=function(n){
var N=parseInt(n[0]),arr=[],s=n[1].split(' ');
for(var i=0;i<2;i++){
    arr.push(s[i]);
}var l=arr[0];r=arr[1];
if ((l<n) && (n<r)){
	return("yes")}
else{
	return("no")
}
}
