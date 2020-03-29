/*Given a number N, print the odd digits in the number(space seperated) or print -1 if there is no odd digit in the given number.
Input Size : N <= 100000
Sample Testcase :
INPUT
2143
OUTPUT
1 3
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(odd((data)))
});
var odd=function(n){
var arr=[],odd=[];length=n.length;
n=n.split('');
for(var j=0;j<length;j++){
    arr.push(parseInt(n[j]));
}
for(var i=0;i<length;i++){
    if ((n[i])%2!=0){
        odd.push(n[i])}}
if ((odd.length)!=0){
    return(odd.join(' ') )
}
else{
    return(-1)
}
}
