/*
You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 25, 36, 49, 64, 81, .......
(Print "Error" if N = negative value and 0 if N = 0).
Sample Input :
18
Sample Output :
324
*/
const read = require('readline');

const inp = read.createInterface({
  input: process.stdin
});

inp.on("line", (num) => {
	console.log(series(num));
});
var series=function(n){
    if (n==0){
        return 0;
    }
    else if (n<0){
        return "Error";
    }
    else{
        return (n**2);
    }
}
