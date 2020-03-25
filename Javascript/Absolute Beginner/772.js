/*Let "A"  be a string. 
Remove all the whitespaces and find it's length.
Sample Input :
Lorem Ipsum
Sample Output :
10*/
const read = require('readline');

const inp = read.createInterface({
  input: process.stdin
});

inp.on("line", (num) => {
	console.log(whitespaces(num));
});
var whitespaces=function(n){
    n=n.replace(" ","");
    return n.length;
}
