/*You are given a string. 
You have to print “Wonder” if the string is wonderful and -1 if it is not. 
A wonderful string is a string,which is made up of exactly 3 characters.
Sample Input :
aabbcc
Sample Output :
Wonder
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(threeChar(data));
});
function threeChar(a){
   var unique_array = Array.from(new Set(a))
    if (unique_array.length==3){
        return "Wonder";
    }
    else{
        return -1;
    }
}
