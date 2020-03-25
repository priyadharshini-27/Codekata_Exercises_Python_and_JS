/*You are provided with a number, "N". 
Find its factorial.
Sample Input :
2
Sample Output :
2*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});
function fact(n){
    var j=1;
    for(var i=1;i<=n;i++){
        j=j*i;
    }return j;
}
inp.on("line", (data) => {
	console.log(fact(data))
});
