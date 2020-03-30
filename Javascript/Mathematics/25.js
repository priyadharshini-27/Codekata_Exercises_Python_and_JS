/*Find the minimum among 10 numbers.
Sample Testcase :
INPUT
5 4 3 2 1 7 6 10 8 9
OUTPUT
1
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(mulMod((data)))
});
var mulMod=function(n){
    var limit=10,list1=[];
    n=n.split(' ');
    for(var i=0;i<limit;i++){
        list1.push(parseInt(n[i]));
    }
    return Math.min(...list1);
}
