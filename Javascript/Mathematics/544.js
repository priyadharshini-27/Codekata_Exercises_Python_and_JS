/*
You are given a number ‘n’.
Your task is to develop an algorithm to tell whether the number is ‘ajs’ or not.
An ‘ajs’ number is a number whose sum of first two digits is present in given number ‘n’
Input Description:
A number ’n’ is given to you
Output Description:
Print 1 if number is ajs or 0 if it is not
Sample Input :
9817
Sample Output :
1
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(check(data))
});
function check(n){
    var sum=parseInt(n[0])+parseInt(n[1]),arr=[],
    n=parseInt(n);
while (n>0){
   r=n%100
   s=n%10
   arr.push(s);
   arr.push(r);
   n=parseInt(n/10);
   }
if (arr.includes(sum)){
    return 1;}
else{
    return 0;
}
}
