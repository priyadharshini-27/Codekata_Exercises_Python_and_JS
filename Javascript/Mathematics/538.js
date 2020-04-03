/*You are provided with a number ’n’. 
Your task is to tell whether that number is saturated. 
A saturated number is a number which is made by exactly two digits.
Sample Input :
121
Sample Output :
Saturated
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(Saturated(data))
});
var Saturated=function(n){
    var array=[];
    for(var i=0;i<n.length;i++){
        array.push(n[i]);
    }
    array=Array.from(new Set(array));
    if (array.length==2){
        return "Saturated"
    }
    else{
        return "Unsaturated"
    }
}
    
