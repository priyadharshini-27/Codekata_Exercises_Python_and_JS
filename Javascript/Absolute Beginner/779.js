/*You are provided with two numbers. 
Find and print the smaller number.
Sample Input :
23 1
Sample Output :
1
*/
const read = require('readline');

const inp = read.createInterface({
  input: process.stdin
});

inp.on("line", (num) => {
	console.log(smaller(num))
});
var smaller=function(n){
   n= n.split( " ");
    if (n[0]>n[1]){
        return n[1];
    }
    else{
        return n[0];
    }
}
