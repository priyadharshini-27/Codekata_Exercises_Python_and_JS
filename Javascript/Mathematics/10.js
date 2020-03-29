/*Given a number N, print 'yes' if it is composite else print 'no'.
Sample Testcase :
INPUT
123
OUTPUT
yes
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(composite(parseInt(data)))
});
var composite=function(N){
if (N>0){
    var c=0
    for (var i=2;i<N;i++){
        if (N%i==0){
            c=c+1}}
    if (c>=1){
        return("yes")}
    else{
        return("no")
}}}
