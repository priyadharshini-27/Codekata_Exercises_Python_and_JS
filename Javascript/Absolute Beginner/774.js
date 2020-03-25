/*
Print the First 3 multiples of the given number "N". (N is a positive integer)

Sample Input :
2
Sample Output :
2 4 6
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(multiple(data))
});
var arr=[];
var multiple=function(n){
    if(n>0){
        for(var i=1;i<4;i++){
            if (i!=3){
           arr.push(i*n); 
        }
            else{
                var result=(arr.join(" "))+" "+(i*n).toString();
            }
        }
    }
    return (result);
}
