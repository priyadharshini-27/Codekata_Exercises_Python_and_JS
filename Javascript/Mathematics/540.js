/*You are given a number ‘n’. 
You have to tell whether a number is great or not. 
A great number is a number whose sum of digits let (m) and product of digits let(j) when summed together gives the number back
m+j=n
Sample Input :
59
Sample Output :
Great
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(greater(data))
});
var greater=function(n){
var s=0,r,m=1,t=n;
while (n>0){
    r=n%10;
    s=s+r;
    m=m*r;
    n=parseInt(n/10);
}
if ((m+s)==t){
    return("Great")}
else{
    return ("no")
}
}
