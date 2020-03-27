/*Given a string S, find its length without using any pre-defined functions.
Sample Testcase :
INPUT
codekata
OUTPUT
8
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(length(data))
});
function length(s)
{
var c=0;
s=s.split("")
for(var i=0;i<s.length;i++){
    c+=1}
return(c)}

