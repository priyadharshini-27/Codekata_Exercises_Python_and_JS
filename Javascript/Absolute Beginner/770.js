/*You are provided with a number check whether its odd or even. 
Print "Odd" or "Even" for the corresponding cases.
Note: In case of a decimal, Round off to nearest integer and then find the output. Incase the input is zero, print "Zero".
Sample Input :
2
Sample Output :
Even*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (num) => {
	console.log(oddEven(num))
});
var oddEven=function(n){
    n=Number(n).toFixed();
    if ((n%2)==0)
   {return ("Even");}
   else if(n==0){
       return ("Zero");
   }else{
       return ("Odd");
   }

}
