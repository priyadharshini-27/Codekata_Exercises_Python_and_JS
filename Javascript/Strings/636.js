/*Jennyfer is fond of strings. 
She wants to read the character from right to left, so she wants you to design a suitable algorithm which satisfy her desire.
Sample Input :
jennyfer
Sample Output :
Refynnej
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(reverseCapital(data))
});
var reverseCapital=function(w){
    array=[]
    const length=w.length-1;
    for(var i=length;i>=0;i--){
        array.push(w[i]);
    }
    var first=array[0];
    array[0]=first.toUpperCase();
    return (array).join('') ;
}
