/*Given a string S, print 2 strings such that first string containing all characters in odd position(s) and other containing all characters in even position(s).
Sample Testcase :
INPUT
XCODE
OUTPUT
XOE CD
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(length(data))
});
function length(n)
{
var a=[],b=[];
for(var i=0;i<n.length;i++){
    if (i%2==0){
        a.push(n[i])}
    else{
        b.push(n[i])}}
return((a.join(""))+ " "+(b.join("")))
}
