/*Given a string S, print 'yes' if it has a vowel in it else print 'no'.
Sample Testcase :
INPUT
codekata
OUTPUT
yes
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(vowel(data))
});
function vowel(word){
var p=0
vowels=['a','e','o','u','A','E','O','U','i','I']
for(var i=0;i<word.length;i++){
    if (vowels.includes(word[i])){
    	p=p+1}}
if (p!=0){
    return("yes")
}else{
    return("no")}}
