/*You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit. 
Note: In case of decimal values, round-off to two decimal places.
Sample Input :
12
Sample Output :
53.60
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (num) => {
	console.log(degree(num))
});
var degree=function(n){
    return (((n)*(1.8))+32).toFixed(2)

}
