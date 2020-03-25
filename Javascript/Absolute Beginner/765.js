/*You are given a number A in Kilometers. 
Convert this into B: Meters and C: Centi-Metres.
Sample Input :
2.00
Sample Output :
2000.00
200000.00
*/
const read = require('readline');

const inp = read.createInterface({
  input: process.stdin
});
inp.on("line", (data)  => {
	console.log(convention_1(parseFloat(data)))
});
inp.on("line", (data) => {
	console.log(convention_2(parseFloat(data)))
});
var convention_1=function(n){
    return parseFloat(n*1000);
}
var convention_2=function(n){
    return parseFloat(n*100000);
}
