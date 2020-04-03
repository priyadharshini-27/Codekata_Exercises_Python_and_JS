/*Assume your brother studies in class 2. 
He has to  complete his homework on co-primes. 
As an elder sibling help him in finding whether the given two numbers is co-prime or not.
Sample Input :
3 5
Sample Output :
1
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(coPrime(data))
});
var coPrime=function(n){
  var f=[];
  n=n.split(" ");
  var a=parseInt(n[0]),b=parseInt(n[1]);
 if (a>b){
     var small=b;
 }
 else{
     var small=a;
 }
 for(var i=1;i<=small;i++){
     if ((a%i==0) && (b%i==0)){
         var hcf=i;
     }
     }
     if(hcf==1){
         return 1;
     }
     else
    {
        return 0;
    } 
}
