/*Given a number N, check if the sum of the digits is a Palindrome. Print 'yes' or 'no' accordingly.
Input Size : 2 <= N <= 1000000000000000000
Sample Testcases :
INPUT
13
OUTPUT
yes*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(palindromeSum(parseInt(data)))
});
function palindromeSum(n){
var s=0,p=0;
while (n!=0){
    r=n%10;
    s+=r;
    n=parseInt(n/10);
}
if (((s.toString()).length)==1){
    return ("yes")
    
}
else if(((s.toString()).length)>1){
    var n=parseInt(s)
    while (n!=0){
        r=n%10;
        p=p*10+r;
        n=parseInt(n/10);
    }
    if (p==s){
        return ('yes')
}    else{
        return ('no')
}}
}
