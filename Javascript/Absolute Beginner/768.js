/*Let "A" be a year, write a program to check whether this year is a leap year or not.
Print "Y" if its a leap year and "N" if its a common year.
Sample Input :
2020
Sample Output :
Y
*/
const read = require('readline');

const inp = read.createInterface({
  input: process.stdin
});

inp.on("line", (year) => {
	console.log(leap(year))
});
var leap=function(n){
    if (((n%4==0) || (n%400==0)) && (n%100!=0)){
        return("Y");
    }
    else{
        return("N");
    }
}
