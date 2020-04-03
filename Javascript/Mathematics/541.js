/*you are given with ‘arasu’ series(shown in example).
You have to understand it and you will be given a number ‘n’ ,you have to print the series till n numbers.
Sample Input :
4
Sample Output :
2 5 10 17
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(series(parseInt(data)))
});
var arr=[]
var series=function(nth_term){
for(var i=1;i<=nth_term;i++){ 
arr.push((i**2)+1)
}return arr.join(" ")}
