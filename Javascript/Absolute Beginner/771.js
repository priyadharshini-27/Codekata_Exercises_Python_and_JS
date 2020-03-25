/*You are given with a number "N", find its cube.
Sample Input :
2
Sample Output :
8
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (num) => {
	console.log(cube(num))
});
var cube=function(n){
    n=Number(n).toFixed();
    return (n*n*n);
}
