/*Given a string S, print 'yes' if it is a palindrome or 'no' if it is not a palindrome.
Sample Testcase :
INPUT
lappal
OUTPUT
yes
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(sets(data))
});
var sets=function(string){
var newstr=string.split('').reverse().join('');
if (newstr==string){
    return 'yes'
}  
else{
    return "no";
}}
      