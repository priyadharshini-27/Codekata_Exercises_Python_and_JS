/*You are given a task to tell whether the number is pure or not.
A pure number is a number whose sum of digits is multiple of 3.
Sample Input :
13
Sample Output :
not
*/
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(pure(data))
});
var pure=function(n){
var s=0;
while (n>0){
    r=n%10
    s+=r
    n=n/10}
if (s%3==0)
   { return("yes")}
else{
    return("not")
}}
    
