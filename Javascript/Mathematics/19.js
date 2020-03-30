/*Write a program to calculate the total surface area and volume of cuboid. 
Input contains three space separated positive integers L, B, H denoting the length, width and height of cuboid respectively.
Sample Testcase :
INPUT
1 2 3
OUTPUT
22 6
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(cubiod(data))
});
var cubiod=function(n){
n=n.split(" ")
var a=[],l=parseInt(n[0]),b=parseInt(n[1]),h=parseInt(n[2]);
a.push(2*((l*b)+(b*h)+(h*l)))
a.push(l*b*h)
return(a.join(" "))}
