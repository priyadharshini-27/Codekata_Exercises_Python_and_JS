/*Given a string 'S' print the sum of weight of the String. 
A weight of character is defined as the ASCII value of corresponding character.
Sample Input :
abc
Sample Output :
294
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(ascii(data))
});
var s=0
var ascii=function(n){
    for(var i=0;i<n.length;i++){
      s+=n.charCodeAt(i); 
    }
    return s;
}

