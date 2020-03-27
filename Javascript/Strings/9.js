/*Given a string S, print it after changing the middle element to * (if the length of the string is even, change the 2 middle elements to *).
Sample Testcase :
INPUT
hello
OUTPUT
he*lo
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(asterisk(data))
});
var asterisk=function(string){
length=string.length;
if (length%2!=0){
    m=length/2
    string=string.substr(1,m)+'*'+string.substr((m+1),)
    return(string)}
else{
    m=length/2
    string=string.substr(0,m-1)+'**'+string.substr(m+1,)
    return(string)
}}
