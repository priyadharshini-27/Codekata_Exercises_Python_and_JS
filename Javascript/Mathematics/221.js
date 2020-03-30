/*The Caesar Cipher technique is one of the earliest and simplest method of encryption technique. 
It’s simply a type of substitution cipher, 
i.e., each letter of a given text is replaced by a letter some fixed number of positions down the alphabet. 
For example with a shift of 1, A would be replaced by B, B would become C, and so on. The method is apparently named after Julius Caesar, who apparently used it to communicate with his officials.
For the given input string(S) and shift print the encrypted string.
Sample Testcase :
INPUT
ABCdEFGHIJKLMNOPQRSTUVWXYz 23
OUTPUT
XYZaBCDEFGHIJKLMNOPQRSTUVw*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(caesarcipher(data))
});
function caesarcipher(string){
    string=string.split(" ");
    var shift=parseInt(string[(string.length)-1]),array='';
    string=string[0].toString();    //convert to string
    for(var index=0;index<string.length;index++){ 
            //Encrypt lowercase characters 
            if ((/[a-z]/g.test(string[index]))==true){
              array=array+(String.fromCharCode(parseInt(((string.charCodeAt(index))+shift-97)%26)+97))
          }
            //E_n(x)=((ord(x)+n-97)%26)+97 LOWER CASE (Encryption Phase with shift n)
            //  Encrypt uppercase characters
            else{
                array=array+(String.fromCharCode(parseInt(((string.charCodeAt(index))+shift-65)%26)+65))
            }
} 
return (array);
}
