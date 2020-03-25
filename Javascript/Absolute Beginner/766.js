/*The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. 
You are provided with the side "a". 
Find the area of the equilateral triangle.
Sample Input :
20
Sample Output :
173.21
*/
const read = require('readline');

const inp = read.createInterface({
  input: process.stdin
});

inp.on("line", (side) => {
	console.log(triangle(parseInt(side)))
});
var triangle=function(n){
    return ((0.25)*(n*n)*(Math.sqrt(3))).toFixed(2)
}
