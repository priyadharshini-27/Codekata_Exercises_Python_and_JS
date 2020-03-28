/*you are given a string made up of parenthesis only.
Your task is to check whether parenthesis are balanced or not.
If they are balanced print 1 else print 0
Sample Input :
{({})}
Sample Output :
1
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(braces(data))
});
var braces=function(n){
    if (n.length%2==0){
        return "1"
    }
    else{
        return "0"
    }
}

